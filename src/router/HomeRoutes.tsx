import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagiment";

export const homeRoutes = [
  {
    path: "/",
    exact: true,
    children: <Home />
  },
  {
    exact: false,
    path: "/setting",
    children: <Setting />
  },
  {
    exact: false,
    path: "/user_management",
    children: <UserManagement />
  }
];
