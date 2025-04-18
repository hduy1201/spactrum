import { useEffect } from "react";
import { useAuth } from "react-oidc-context";
import { useNavigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const auth = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth.isLoading && !auth.isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [auth.isLoading, auth.isAuthenticated, navigate]);

  if (auth.isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-primary-500" />
      </div>
    );
  }

  if (!auth.isAuthenticated) {
    return null; // useEffect will redirect
  }

  return <Outlet />;
}
