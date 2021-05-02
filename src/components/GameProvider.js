import React, { useEffect, useState, useContext } from "react";
import { SessionContext } from "./SessionProvider";

export var GameContext = React.createContext();

function GameProvider({ children }) {
  const session = useContext(SessionContext);
  const [messages, setMessages] = useState([]);

  // TODO
  useEffect(() => {
    console.log("GAME PROVIDER");
    if (!session.socket.current) {
      return;
    }
    console.log("LISTENING TO MSGS");
    session.socket.current.on("chat", function ({ owner, msg }) {
      console.log(owner, msg);
      setMessages((prev) => [...prev, { userid: owner, text: msg }]);
    });

    return () => {
      // Delete previous listenings
      console.log("USE EFFECT RETURN");
      setMessages([]);
      session.socket.current.off("chat");
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
