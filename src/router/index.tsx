import { createBrowserRouter, Navigate } from "react-router";
import OnboardingPage from "../pages/OnboardingPage";
import { useUserStore } from "../store/useUserStore";
import PublicRoute from "./PublicRoute";
import DashboardPage from "../pages/DashboardPage";
import ProjectDetailPage from "../pages/ProjectDetailPage";

const { userProfile } = useUserStore.getState();

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PublicRoute>
        {userProfile.hasOnboarded ? <DashboardPage /> : <OnboardingPage />}
      </PublicRoute>
    ),
  },
  {
    path: "/dashboard",
    element: <DashboardPage />,
  },
  {
    path: "/project/:id",
    element: <ProjectDetailPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
]);
