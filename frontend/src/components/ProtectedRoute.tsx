import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

interface Props {
  children: JSX.Element;
  category?: string;
}

export function ProtectedRoute({ children, category }: Props) {
  const { user } = useAuth();

  // If no user is logged in, redirect to login
  if (!user) return <Navigate to="/login" replace />;

  // If category is specified and user category doesn't match, redirect
  if (category && user.category !== category) {
    return <Navigate to="/login" replace />;
  }

  return children;
}
