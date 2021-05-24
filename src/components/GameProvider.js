import React, { useEffect, useState, useContext, useRef } from "react";
import { useHistory } from "react-router-dom";
import { SessionContext } from "./SessionProvider";

export var GameContext = React.createContext();

function GameProvider({ children }) {
  const session = useContext(SessionContext);
  const history = useHistory();
  const [messages, setMessages] = useState([]);
  const [isPrivate, setIsPrivate] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const [pausedBy, setPausedBy] = useState("");

  // Game variables
  const [hand, setHand] = useState([]);

  // Diccionario con los bodys de todos los jugadores
  const [bodies, setBodies] = useState({});
  const bodiesRef = useRef(bodies);
  const [currentTurn, setCurrentTurn] = useState("");
  const [changeTurn, setChangeTurn] = useState(0);
  const changeTurnRef = useRef(changeTurn);

  const [players, setPlayers] = useState([]);
  const playersRef = useRef(players);

  // Transplant variables
  const [transplantData, setTransplantData] = useState({});

  const [leaderboard, setLeaderboard] = useState({});
  const [isFinished, setIsFinished] = useState(false);
  const [ownFinished, setOwnFinished] = useState(false);

  // Set to 30 by default
  const [remTurnTime, setRemTurnTime] = useState(30);

  useEffect(() => {
    if (!session.socket.current) {
      return;
    }
    session.socket.current.on("chat", function ({ owner, msg }) {
      setMessages((prev) => [...prev, { userid: owner, text: msg }]);
    });

    return () => {
      // Delete previous listenings and clean variables
      setMessages([]);
      session.socket.current.off("chat");
    };
  }, [session.socketChange]);

  // Listen to "game_update" events from server
  useEffect(() => {
    if (!session.socket.current) {
      return;
    }

    session.socket.current.on("game_update", (response) => {
      if (response != null) {
        if ("current_turn" in response) {
          setRemTurnTime(30);
          setTransplantData({});
          setCurrentTurn(response.current_turn);
          setChangeTurn((changeTurnRef.current + 1) % 2);
          changeTurnRef.current = (changeTurnRef.current + 1) % 2;
        }
        if ("hand" in response) {
          setHand(response.hand);
        }
        if ("players" in response) {
          // Set players on game -> {board, name, display_name, picture}
          let users = [];
          // Traverse players list and update it, deleting the ones that are
          // not in the list and leaving the ones that still are
          playersRef.current.map((player) => {
            // Search player in players response -> if it exist apend if not don't
            var i = 0;
            for (i; i < response.players.length; i++) {
              if (response.players[i].name == player.name) {
                // Add to list
                // Check if is ai
                if (response.players[i].is_ai == true) {
                  // Check if it own player replaced by AI -> get out of the match
                  if (response.players[i].name == session.userData.name) {
                    // Get out of match
                    // When leaving, change updateSocket to get a new socket
                    session.setUpdateSocket((session.updateSocket + 1) % 2);
                    history.push("/home");
                    return;
                  } else {
                    // Set received player instead of current one
                    // adding its display name as ai_bot
                    let ia_player = response.players[i];
                    ia_player["display_name"] = ia_player.name + " [BOT]";
                    users = [...users, ia_player];
                  }
                } else {
                  // Set ordinary one (not ai)
                  users = [...users, player];
                }
              }
            }
          });

          // Add new players (e.g. at the beggining)
          response.players.map((player) => {
            // Search if it is not in users list
            var i = 0;
            for (i; i < users.length; i++) {
              if (player.name == users[i].name) {
                break;
              }
            }
            if (i == users.length) {
              // Add player to list of players as new player
              // Adding new key: display_name (the same as its name at this point)
              player["display_name"] = player.name;
              users = [...users, player];
            }
          });

          // Set own user the first on the list of players
          for (var i = 0; i < users.length; i++) {
            if (users[i].name == session.userData.name) {
              let auxUser = users[0];
              users[0] = users[i];
              users[i] = auxUser;
            }
          }

          playersRef.current = users;
          setPlayers(users);
        }
        if ("bodies" in response) {
          // Update corresponding body in bodies -> if !exist create a new
          // entry in the dictionary

          // Get keys in received bodies
          let bodyKeys = Object.keys(response.bodies);

          let auxBodies = { ...bodiesRef.current };

          bodyKeys.map((bodyKey) => {
            auxBodies[bodyKey] = response.bodies[bodyKey];
          });
          bodiesRef.current = auxBodies;
          setBodies(auxBodies);
        }

        if ("paused" in response) {
          setIsPaused(response.paused);
          setPausedBy(response.paused_by);
        }

        if ("finished" in response) {
          if (response.finished) {
            // La partida ha terminado
            setIsFinished(response.finished);
            setLeaderboard(response.leaderboard);
            // Se limpia la mano, para quitar esa zona manteniendo el tamaño
            setHand([]);
          }
        }

        if ("remaining_turn_secs" in response) {
          setRemTurnTime(Math.floor(response.remaining_turn_secs));
          // To update timer with corresponding remainder time
          setChangeTurn((changeTurnRef.current + 1) % 2);
          changeTurnRef.current = (changeTurnRef.current + 1) % 2;
        }

        if ("leaderboard" in response) {
          // Alguien ha terminado. Si es el propio user, quitar cartas
          // de body y de hand
          // Ver si el propio user tiene los campos a null o no
          if (response.leaderboard[session.userData.name].coins) {
            // Se limpia la mano, para quitar esa zona manteniendo el tamaño
            setHand([]);
            setOwnFinished(true);
          }
        }
      }
    });

    return () => {
      // Delete previous listenings and clean variables
      setHand([]);
      bodiesRef.current = {};
      setBodies({});
      setCurrentTurn("");
      playersRef.current = [];
      setPlayers([]);
      session.socket.current.off("game_update");
      setIsPaused(false);
      setPausedBy("");
      setTransplantData({});
      setLeaderboard({});
      setIsFinished(false);
      setRemTurnTime(30);
      setOwnFinished(false);
    };
  }, [session.socketChange]);

  return (
    <GameContext.Provider
      value={{
        messages: messages,
        setMessages: (msgs) => setMessages(msgs),
        hand: hand,
        bodies: bodies,
        currentTurn: currentTurn,
        changeTurn: changeTurn,
        players: players,
        isPrivate: isPrivate,
        setIsPrivate: (game) => setIsPrivate(game),
        isPaused,
        pausedBy,
        transplantData: transplantData,
        isFinished,
        leaderboard,
        ownFinished,
        setTransplantData: (data) => setTransplantData(data),
        remTurnTime,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
