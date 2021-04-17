import React, { useState } from "react";

export var NumUsersContext = React.createContext();

function UsersProvider({ children }) {
  const [users, setUsers] = useState(0);

  return (
    <NumUsersContext.Provider
      value={{
        users: users,
        setUsers: (users) => setUsers(users),
      }}
    >
      {children}
    </NumUsersContext.Provider>
  );
}

export default UsersProvider;
