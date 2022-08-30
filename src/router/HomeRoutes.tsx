import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagiment";

export const homeRoutes = [
  {
    exact: "/",
    path: true,
    children: <Home />
  },
  {
    exact: "/setting",
    path: false,
    children: <Setting />
  },
  {
    exact: "/user_management",
    path: false,
    children: <UserManagement />
  }
];
