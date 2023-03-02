import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { StoreContext } from "../App";

export default function ProtectedRoute({ children }) {
  const { isLoggedIn } = useContext(StoreContext);
  if (!isLoggedIn) {
    return <Navigate to="/login" />;
  } else return children;
}
