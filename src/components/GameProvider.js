import React, { useState } from "react";
import { SessionContext } from "./SessionProvider";

export var GameContext = React.createContext();

function GameProvider({ children }) {
  const session = useContext(SessionContext);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (!session.socket.current) {
      return;
    }
    session.socket.current.on("chat", function ({ owner, msg }) {
      console.log(owner, msg);
      setMessages((prev) => [...prev, { userid: owner, text: msg }]);
    });
  }, []);

  return (
    <GameContext.Provider
      value={{
        messages: messages,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}

export default GameProvider;
