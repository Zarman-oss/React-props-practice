import { createContext, useState } from 'react';

const UserContext = createContext();

const [user, setUser] = useState({
  id: 1,
  text: 'this is from context',
});

export const UserProvider = ({ children }) => {
  return (
    <UserContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
