import react, { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
import { USER_DATA,UserData, LoginData } from "../bl/users";

type Props = {
  children: React.ReactNode;
};

type AuthContextType = {
  user: UserData | null;
  login: (data: LoginData) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType|null>(null); // Define AuthContext here

export const AuthProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useLocalStorage<UserData|null>("user", null);
  const navigate = useNavigate();

  // call this function when you want to authenticate the user
  const login = async (data: LoginData) => {
    console.log(data, "loging in");
    const response: UserData =USER_DATA;
    setUser(response);
    navigate("/profile");
  };

  // call this function to sign out the logged-in user
  const logout = () => {
    setUser(null);
    navigate("/auth", { replace: true });
  };

  const value = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user]
  );
  
 react.useEffect(() => {
  if (!user) {
   navigate("/auth", { replace: true });
  }
 }, [user, navigate]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;

};

export const useAuth = () => {
  return useContext(AuthContext);
};
