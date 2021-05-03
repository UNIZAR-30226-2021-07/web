import React, { useEffect, useState, useContext } from "react";
import { SessionContext } from "./SessionProvider";

export var GameContext = React.createContext();

function GameProvider({ children }) {
  const session = useContext(SessionContext);
  const [messages, setMessages] = useState([]);

  // Game variables

  //   "hand": [
  //   {"card_type": "organ", "color": "red"},
  //   {"card_type": "virus", "color": "green"},
  //   {"card_type": "treatment", "treatment_type": "infection"},
  // ],
  const [hand, setHand] = useState([]);

  // Los cuerpos de los jugadores.
  //   "bodies": {
  //     // Pila del jugador, siempre de longitud 4.
  //     "marcuspkz": [
  //         {
  //             // Puede ser nulo si no hay nada en esa posición.
  //             "organ": {
  //                 "card_type": "organ",
  //                 "color": "red"
  //             }
  //             // Puede estar vacío si no hay modificadores.
  //             "modifiers": [
  //                 {"card_type": "virus", "color": "red"},
  //                 // ...
  //             ]
  //         },
  //             // ....
  //     ],
  //     // ...
  // },

  // TODO: De momento se trata como una lista con todos los bodys de
  // todos los jugadores, siendo el primero el del propio jugador
  const [bodies, setBodies] = useState([]);

  const [currentTurn, setCurrentTurn] = useState("");

  const [players, setPlayers] = useState([]);

  useEffect(() => {
    if (!session.socket.current) {
      return;
    }
    session.socket.current.on("chat", function ({ owner, msg }) {
      console.log(owner, msg);
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
          let rivals = [];
          response.players.map((player) => {
            // Rival
            if ("board" in player) {
              rivals = [...rivals, player];
            }
          });
          setPlayers(rivals);
        }
        // TODO: Bodies, etc.
        console.log(response);
      }
    });

    return () => {
      // Delete previous listenings and clean variables
      setHand([]);
      setBodies([]);
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
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
