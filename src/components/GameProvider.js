import React, { useEffect, useState, useContext } from "react";
import { SessionContext } from "./SessionProvider";

export var GameContext = React.createContext();

// const userBodyTest = {
//   "bodies": {
//     // Pila del jugador, siempre de longitud 4.
//     // JUGADOR N
//     "fernandito": [
//       // PILAS DE CARTAS - VECTOR DE PILAS (4 PILAS)
//       // PILA 0
//       {
//         // Puede ser nulo si no hay nada en esa posición.
//         "organ": {
//           "card_type": "organ",
//           "color": "red"
//         },
//         // Puede estar vacío si no hay modificadores.
//         // VECTOR DE CARTAS SOBRE LA PRIMERA CARTA
//         "modifiers": [
//           { "card_type": "virus", "color": "red" },
//         ],
//       },
//       // PILA 1
//       {
//         // Puede ser nulo si no hay nada en esa posición.
//         "organ": {
//           "card_type": "organ",
//           "color": "blue"
//         },
//         // Puede estar vacío si no hay modificadores.
//         // VECTOR DE CARTAS SOBRE LA PRIMERA CARTA
//         "modifiers": [
//           { "card_type": "virus", "color": "red" },
//         ],
//       },
//       // PILA 2
//       {
//         // Puede ser nulo si no hay nada en esa posición.
//         "organ": {
//           "card_type": "organ",
//           "color": "red"
//         },
//         // Puede estar vacío si no hay modificadores.
//         // VECTOR DE CARTAS SOBRE LA PRIMERA CARTA
//         "modifiers": [
//           { "card_type": "virus", "color": "red" },
//         ],
//       },
//       // PILA 3
//       {
//         // Puede ser nulo si no hay nada en esa posición.
//         "organ": {
//           "card_type": "organ",
//           "color": "blue"
//         },
//         // Puede estar vacío si no hay modificadores.
//         // VECTOR DE CARTAS SOBRE LA PRIMERA CARTA
//         "modifiers": [
//           { "card_type": "virus", "color": "red" },
//         ],
//       },
//     ],
//   }
// };

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
          color: "blue",
        },
        // Puede estar vacío si no hay modificadores.
        // VECTOR DE CARTAS SOBRE LA PRIMERA CARTA
        modifiers: [{ card_type: "virus", color: "red" }],
      },
    ],
  },
};

function GameProvider({ children }) {

  // TEST
  const stacks =  [
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
        color: "blue",
      },
      // Puede estar vacío si no hay modificadores.
      // VECTOR DE CARTAS SOBRE LA PRIMERA CARTA
      modifiers: [{ card_type: "virus", color: "red" }],
    },
  ];
  //-----------------------------------------------------------
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

  // Body del jugador
  const [body, setBody] = useState([]);
  // Lista con los bodys de todos los jugadores rivales, 5 como máximo
  const [bodies, setBodies] = useState([[],[],[],[],[]]);

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
            if (player.name != session.userData.name) {
              rivals = [...rivals, player];
            }
          });
          setPlayers(rivals);
        }
        /* NOTA: No se puede probar hasta que llegue más de un update y por
        // tanto players tome valor dentro de este useEffect -> la primera
        // vez no lo tiene y por tanto no es probable
        // TODO: Provisional -> bodies hardcodeado, para probar mapeo
        // ----------- OJO QUITAR ---------
        //response = userBodyTest;
        response = rivalBodyTest;
        // --------------------------------
        console.log(response);
        // TODO: Bodies, etc.
        if ("bodies" in response) {
          // Llegan sólo los bodies que hayan cambiado, con clave nombre del
          // usuario al que pertenezca el body
          // NOTA: La clave de cada body es su nombre de usuario
          // NOTA1: De momento voy a meter todos los bodies rivales en un mismo
          // array, para probar si haciendo useContext y accediento a bodies[index]
          // se renderiza si cambia cualquier componente o se renderiza solo si 
          // cambia 1
          console.log(response.bodies);
     
          // Check if user or rival body
          // User body
          if (session.userData.name in response.bodies){
            setBody(response.bodies[session.userData.name]);
          }
          // Rival body
          else {
            // Search for username in players and get its board index
            console.log(Object.keys(response.bodies));
            let bodiesKeys = Object.keys(response.bodies);
            let rivalName = bodiesKeys[0];
            //let rival = players.find((player) => player.name == rivalName);
            console.log(players)
            console.log(players.find((player) => player.name == rivalName))
            // Take board value as index to bodies, to set that body
            //let auxBodies = bodies;
            //auxBodies[rival.board] = response.bodies[rivalName];
            //console.log(auxBodies);
            //setBodies(auxBodies);
          }
        
        }
        */
      }
    });

    return () => {
      // Delete previous listenings and clean variables
      setHand([]);
      setBody([]);
      setBodies([[],[],[],[],[]]);
      setCurrentTurn("");
      setPlayers([]);
      session.socket.current.off("game_update");
    };
  }, [session.socketChange]);

  // TODO: Test provisional BODY
  useEffect(() => {
    // TODO: Provisional -> bodies hardcodeado, para probar mapeo
    // ----------- OJO QUITAR ---------
    //response = userBodyTest;
    let response = rivalBodyTest;
    // --------------------------------
    // TODO: Bodies, etc.
    if ("bodies" in response) {
      // Llegan sólo los bodies que hayan cambiado, con clave nombre del
      // usuario al que pertenezca el body
      // Check if user or rival body
      // User body
      if (session.userData.name in response.bodies) {
        setBody(response.bodies[session.userData.name]);
      }
      // Rival body
      else if (players) {
        // Order bodies with same order in players -> get array position
        // of this username's board in players
        // Get body username
        let bodiesKeys = Object.keys(response.bodies);
        let rivalName = bodiesKeys[0];
        let index = players.findIndex((player) => player.name == rivalName);
        if (index != -1) {
            let auxBodies = bodies;
              // 4 stacks in each body
  const [stacks, setStacks] = useState([[],[],[],[]]);

  useEffect(() => {
    // Check if null?
    console.log(cardStacks);
    let auxStacks = [[],[],[],[]];
    auxStacks = stacks;
    // For each stack
    cardStacks.map((stack, ind) => {
      // Treat modifiers as single cards over first card
      let newStack = [];
      newStack = [...newStack, stack.organ];
      stack.modifiers.map((modifier) => {
        newStack = [...newStack, modifier];
      })
      // Update stack with index ind
      auxStacks[ind] = newStack;
    });
    // Update stacks
    setStacks(auxStacks);


    return () => {
      setStacks([[],[],[],[]]); 
    }
  }, [cardStacks]);
            auxBodies[index] = response.bodies[rivalName];
            setBodies(auxBodies);
        }
      }
    }
  }, [players]);

  return (
    <GameContext.Provider
      value={{
        messages: messages,
        setMessages: (msgs) => setMessages(msgs),
        hand: hand,
        body: body,
        bodies: bodies,
        currentTurn: currentTurn,
        players: players,
        stacks: stacks,   // TESTING BODIES
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
