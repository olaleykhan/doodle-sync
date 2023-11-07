import { Navigate } from "react-router-dom";
import { useAuth } from "./useAuthContext";

type Props = {
    children: JSX.Element;
}
export const AuthGuard:React.FC<Props> = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};