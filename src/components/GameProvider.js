import React, { useEffect, useState, useContext } from "react";
import { SessionContext } from "./SessionProvider";

export var GameContext = React.createContext();

/*
// ------------------------ PRUEBAS BODY ---------------------------------------
const rivalBodyTest = {
  bodies: {
    // Pila del jugador, siempre de longitud 4.
    // JUGADOR N
    ordesa: [
      // PILAS DE CARTAS - VECTOR DE PILAS (4 PILAS)
      // PILA 0
      {
        // Puede ser nulo si no hay nada en esa posición.
        organ: {
          card_type: "organ",
          color: "red",
        },
        // Puede estar vacío si no hay modificadores.
        // VECTOR DE CARTAS SOBRE LA PRIMERA CARTA
        modifiers: [{ card_type: "virus", color: "red" }],
      },
      // PILA 1
      {
        // Puede ser nulo si no hay nada en esa posición.
        organ: {
          card_type: "organ",
          color: "blue",
        },
        // Puede estar vacío si no hay modificadores.
        // VECTOR DE CARTAS SOBRE LA PRIMERA CARTA
        modifiers: [{ card_type: "virus", color: "red" }],
      },
      // PILA 2
      {
        // Puede ser nulo si no hay nada en esa posición.
        organ: {
          card_type: "organ",
          color: "red",
        },
        // Puede estar vacío si no hay modificadores.
        // VECTOR DE CARTAS SOBRE LA PRIMERA CARTA
        modifiers: [{ card_type: "virus", color: "red" }],
      },
      // PILA 3
      {
        // Puede ser nulo si no hay nada en esa posición.
        organ: {
          card_type: "organ",
          color: "yellow",
        },
        // Puede estar vacío si no hay modificadores.
        // VECTOR DE CARTAS SOBRE LA PRIMERA CARTA
        modifiers: [{ card_type: "virus", color: "red" }],
      },
    ],
  },
};
*/

function GameProvider({ children }) {
  const session = useContext(SessionContext);
  const [messages, setMessages] = useState([]);

  // Game variables
  const [hand, setHand] = useState([]);

  // Diccionario con los bodys de todos los jugadores
  const [bodies, setBodies] = useState({});

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
      console.log(response);
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
          // Set own user the first on the list of players
          let ownUser = response.players.find(
            (player) => player.name == session.userData.name
          );
          users = [...users, ownUser];
          response.players.map((player) => {
            // Rivals
            if (player.name != session.userData.name) {
              users = [...users, player];
            }
          });
          setPlayers(users);
        }
        if ("bodies" in response) {
          // Llegan sólo los bodies que hayan cambiado, con clave nombre del
          // usuario al que pertenezca el body
          if (players.length > 0) {
            // Update corresponding body in bodies -> if !exist create a new
            // entry in the dictionary
            // Get key in received body
            let bodyKey = Object.keys(response.bodies);
            let auxBodies = bodies;
            auxBodies[bodyKey] = response.bodies[bodyKey];
            setBodies(auxBodies);
          }
        }
      }
    });

    return () => {
      // Delete previous listenings and clean variables
      setHand([]);
      setBodies({});
      setCurrentTurn("");
      setPlayers([]);
      session.socket.current.off("game_update");
    };
  }, [session.socketChange]);

  /*
  // TODO: Test provisional BODY
  useEffect(() => {
    // TODO: Provisional -> bodies hardcodeado, para probar mapeo
    //response = userBodyTest;
    //let response = rivalBodyTest;
    // --------------------------------
    if ("bodies" in response) {
      // Llegan sólo los bodies que hayan cambiado, con clave nombre del
      // usuario al que pertenezca el body
      if (players.length > 0) {
        // Update corresponding body in bodies -> if !exist create a new
        // entry in the dictionary
        // Get key in received body
        let bodyKey = Object.keys(response.bodies);
        let auxBodies = bodies;
        auxBodies[bodyKey] = response.bodies[bodyKey];
        setBodies(auxBodies);
      }
    }
  }, [players]);
  */

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
