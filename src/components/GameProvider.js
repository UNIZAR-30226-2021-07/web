import React, { useEffect, useState, useContext } from "react";
import { SessionContext } from "./SessionProvider";

export var GameContext = React.createContext();

// ------------------------ PRUEBAS BODY ---------------------------------------
/*
const rivalBodyTest = {
  bodies: {
    // Pila del jugador, siempre de longitud 4.
    // JUGADOR N
    fernandito: [
      // PILAS DE CARTAS - VECTOR DE PILAS (4 PILAS)
      // PILA 0
      {
        // Puede ser nulo si no hay nada en esa posición.
        organ: null,
        // Puede estar vacío si no hay modificadores.
        // VECTOR DE CARTAS SOBRE LA PRIMERA CARTA
        modifiers: [],
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
    ordesa: [
      // PILAS DE CARTAS - VECTOR DE PILAS (4 PILAS)
      // PILA 0
      {
        // Puede ser nulo si no hay nada en esa posición.
        organ: null,
        // Puede estar vacío si no hay modificadores.
        // VECTOR DE CARTAS SOBRE LA PRIMERA CARTA
        modifiers: [],
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
        modifiers: [{ card_type: "virus", color: "yellow" }],
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
          console.log(bodies);

          //console.log(response.bodies);
          // Llegan sólo los bodies que hayan cambiado, con clave nombre del
          // usuario al que pertenezca el body
          // Update corresponding body in bodies -> if !exist create a new
          // entry in the dictionary
          // Get key in received body
          
          let bodyKeys = Object.keys(response.bodies);
          console.log(bodyKeys);
          
          let auxBodies = {};
          /*
          for (const key in bodies) {
            console.log(key);
            console.log("mogambo");
            auxBodies[key] = bodies[key];
            console.log(auxBodies);
          }
          */
          console.log(bodies);
          console.log(auxBodies);
          bodyKeys.map((bodyKey) => {
            auxBodies[bodyKey] = response.bodies[bodyKey];
            console.log(auxBodies[bodyKey]);
          });
          console.log(auxBodies);
          //setBodies(auxBodies);
          
        }
        // TODO: Resto campos del game_update?
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


  useEffect(() => {
    console.log("CAMBIO DE BODIES");
    console.log(bodies);
  }, [bodies]);

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
