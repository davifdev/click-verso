import { useContext, createContext } from "react";

const AuthContext = createContext();

const AuthContextProvider = ({ children, value }) => {
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

const useAuthValue = () => {
  return useContext(AuthContext);
};

// eslint-disable-next-line react-refresh/only-export-components
export { AuthContextProvider, useAuthValue };
