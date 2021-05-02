import React, { useEffect, useState, useContext } from "react";
import { SessionContext } from "./SessionProvider";

export var GameContext = React.createContext();

function GameProvider({ children }) {
  const session = useContext(SessionContext);
  const [messages, setMessages] = useState([]);

  // TODO
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
      });

      return () => {
        // Delete previous listenings and clean variables
        // TODO
      };
    }, [session.socketChange]);

  return (
    <GameContext.Provider
      value={{
        messages: messages,
        setMessages: (msgs) => setMessages(msgs),
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
