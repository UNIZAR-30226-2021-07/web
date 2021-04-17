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
  const [socket, setToken] = useState(() => getLocalStorage("token", null));
  const socket = useRef(null);
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    console.log(token);
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
        setUserData: (userData) => setUserData(userData),
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}

export default SessionProvider;
