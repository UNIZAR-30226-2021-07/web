import React, { useState, useEffect } from "react";

export var SessionContext = React.createContext();

function setLocalStorage(key, value) {
  try {
    window.localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    // catch possible errors:
    // https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API
  }
}

function getLocalStorage(key, initialValue) {
  try {
    const value = window.localStorage.getItem(key);
    return value ? JSON.parse(value) : initialValue;
  } catch (e) {
    // if error, return initial value
    return initialValue;
  }
}

function SessionProvider({ children }) {
  const [token, setToken] = useState(() => getLocalStorage("token", null));
  const [socket, setSocket] = useState(null);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Guardamos el token cuando se actualiza
    setLocalStorage("token", token);
  }, [token]);

  return (
    <SessionContext.Provider
      value={{
        token: token,
        socket: socket,
        userData: userData,
        setToken: (token) => setToken(token),
        setSocket: (socket) => setSocket(socket),
        setUserData: (userData) => setUserData(userData),
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;