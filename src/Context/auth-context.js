import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

const AutoContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(localStorage.getItem("token")?true:false);
  

  return (
    <AutoContext.Provider value={{ auth, setAuth }}>
      {children}
    </AutoContext.Provider>
  );
};

const useAuth = () => useContext(AutoContext);

export { useAuth, AuthProvider };
