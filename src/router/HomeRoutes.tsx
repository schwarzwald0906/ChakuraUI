import { Home } from "../components/pages/Home";
import { Setting } from "../components/pages/Setting";
import { UserManagement } from "../components/pages/UserManagiment";
import { Page404 } from "../components/pages/Page404";

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
  },
  {
    exact: false,
    path: "/*",
    children: <Page404 />
  }
];
