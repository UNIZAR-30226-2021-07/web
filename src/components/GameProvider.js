import React, { useEffect, useState, useContext, useRef } from "react";
import { SessionContext } from "./SessionProvider";

export var GameContext = React.createContext();

function GameProvider({ children }) {
  const session = useContext(SessionContext);
  const [messages, setMessages] = useState([]);
  const [isPrivate, setIsPrivate] = useState(false);
  const [pause, setPause] = useState({});

  // Game variables
  const [hand, setHand] = useState([]);

  // Diccionario con los bodys de todos los jugadores
  const [bodies, setBodies] = useState({});
  const bodiesRef = useRef(bodies);
  const [currentTurn, setCurrentTurn] = useState("");

  const [players, setPlayers] = useState([]);
  const playersRef = useRef(players);

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
          setCurrentTurn(response.current_turn);
        }
        if ("hand" in response) {
          setHand(response.hand);
        }
        if ("players" in response) {
          // Set players on game -> {board, name, picture}
          let users = [];
          // Traverse players list and update it, deleting the ones that are 
          // not in the list and leaving the ones that still are
          playersRef.current.map((player) => {
            // Search player in players response -> if it exist apend if not don't
            var i = 0;
            for (i; i < response.players.length; i++) {
              if (response.players[i].name == player.name) {
                  // Add to list
                  users = [...users, player];
              }
            }
          });

          // Look for new players and add it (like IA)
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

          console.log(users);

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
          setPause({
            isPaused: response.paused,
            paused_by: response.paused_by,
          });
        }
      }
    });

    return () => {
      // Delete previous listenings and clean variables
      setHand([]);
      bodiesRef.current = {};
      setBodies({});
      setCurrentTurn("");
      setPlayers([]);
      session.socket.current.off("game_update");
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
        players: players,
        isPrivate: isPrivate,
        setIsPrivate: (game) => setIsPrivate(game),
        pause,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
