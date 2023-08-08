import React, { ReactNode } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Navigate, useLocation, Outlet } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode
}

export function PrivateRoute({ children }: PrivateRouteProps) {
  const auth = useAuth();

  return (
    !auth.user ? <Navigate to='/' /> : <Outlet />
  )
};

