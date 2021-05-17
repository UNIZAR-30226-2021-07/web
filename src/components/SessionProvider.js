import React, { useState, useEffect, useRef } from "react";

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
  // Para poder coger el valor que se le asigna desde el useEffect
  // con current se referencia a este objeto desde fuera
  const socket = useRef(null);
  const [socketChange, setSocketChange] = useState(1);
  // Actua como un flag. En el momento en el que se cambia se dispara la
  // obtención de un nuevo socket en "App".
  const [updateSocket, setUpdateSocket] = useState(1);
  // Flag de estar o no en partida
  const [onMatch, setOnMatch] = useState(false);
  const [restartPending, setRestartPending] = useState(false);
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
        socketChange: socketChange,
        updateSocket: updateSocket,
        onMatch: onMatch,
        restartPending: restartPending,
        userData: userData,
        setToken: (token) => setToken(token),
        setSocketChange: (socketChange) => setSocketChange(socketChange),
        setUpdateSocket: (updateSocket) => setUpdateSocket(updateSocket),
        setOnMatch: (onMatch) => setOnMatch(onMatch),
        setUserData: (userData) => setUserData(userData),
        setRestartPending: (restartPending) =>
          setRestartPending(restartPending),
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;
