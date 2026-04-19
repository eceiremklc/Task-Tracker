import React from "react";
import { Navigate } from "react-router";
import { useUserStore } from "../store/useUserStore";

type Props = { children: React.ReactNode };

const PublicRoute = ({ children }: Props) => {
  const name = useUserStore((state) => state.userProfile.name);
  return !name ? <>{children}</> : <Navigate to="/dashboard" />;
};

export default PublicRoute;
