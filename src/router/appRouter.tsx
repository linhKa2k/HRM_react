import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";

import { RouteType } from "./config";
import Status from "../views/status/danh-sach/index";
import { ViewA } from "../views/view-a/index";
import { AboutView } from "../views/view-b/index";
import StatusAdd from "../views/status/xu-ly/create";
import StatusEdit from "../views/status/xu-ly/edit";  
import StatusView from "../views/status/xu-ly/view";
import Login from "../views/authen/login/login";
import Register from "../views/authen/register/register";
import ForgotPassword from "../views/authen/forgot-password/forgot-password";
import ChangePassword from "../views/authen/change-password/change-password";

const appRoutes: RouteType[] = [
  {
    path: "/home",
    element: <Status />,
    state: "Home",
    sidebarProps: {
      displayText: "HOME",
      icon: <DesktopOutlined />,
    },
  },
  {
    path: "/status",
    state: "status",
    element: <Status />,
    sidebarProps: {
      displayText: "Status",
      icon: <FileOutlined />,
    },
    hiddenMenu: true,
    child: [
      {
        path: "add",
        element: <StatusAdd />,
        state: "status.add",
        sidebarProps: {
          displayText: "Add",
        },
        hiddenMenu: true,
      },
      {
        path: "edit/:id",
        element: <StatusEdit />,
        state: "status.edit",
        sidebarProps: {
          displayText: "Edit",
        },
        hiddenMenu: true,
      },
      {
        path: "view/:id",
        element: <StatusView />,
        state: "status.view",
        sidebarProps: {
          displayText: "view",
        },
        hiddenMenu: true,
      },
    ],
  },
  {
    path: "/component",
    state: "component",
    element: <StatusView />,
    sidebarProps: {
      displayText: "Components",
      icon: <PieChartOutlined />,
    },
    child: [
      {
        path: "alert",
        element: <AboutView />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Alert",
        },
      },
      {
        path: "button",
        element: <Status />,
        state: "component.button",
        sidebarProps: {
          displayText: "Button",
        },
      },
    ],
  },
  {
    path: "/documentation",
    element: <ViewA />,
    state: "documentation",
    sidebarProps: {
      displayText: "Documentation",
      icon: <TeamOutlined />,
    },
  },
  {
    path: "/changelog",
    element: <StatusAdd />,
    state: "changelog",
    sidebarProps: {
      displayText: "Changelog",
      icon: <UserOutlined />,
    },
  },
  {
    path: "/login",
    element: <Login />,
    state: "login",
    sidebarProps: {
      displayText: "login",
      icon: <DesktopOutlined />,
    },
  },
  {
    path: "/register",
    element: <Register />,
    state: "Register",
    sidebarProps: {
      displayText: "Register",
      icon: <DesktopOutlined />,
    },
  },
  {
    path: "/fogotPassword",
    element: <ForgotPassword />,
    state: "fogotPassword",
    sidebarProps: {
      displayText: "Quên mật khẩu",
      icon: <DesktopOutlined />,
    },
  },
  {
    path: "/changePassword",
    element: <ChangePassword />,
    state: "changePassword",
    sidebarProps: {
      displayText: "Thay đổi mật khẩu",
      icon: <DesktopOutlined />,
    },
  },
];

export default appRoutes;
