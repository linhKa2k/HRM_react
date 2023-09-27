import { useState } from "react";
import appRoutes from "/@/router/appRouter";
import { useNavigate } from "react-router-dom";
import { MenuItem } from "./types";

export const useMenuNavigation = () => {
  const [selectedKey, setSelectedKey] = useState([""]);
  const [openKeys, setOpenKeys] = useState([""]);
  const navigation = useNavigate();

  const handleSetLocalOpenKey = (openKeyLocal: string) => {
    window.sessionStorage.setItem("openKeyLocal", openKeyLocal)
  }

  const handleChangePage = (pathname: string) => {
    const pathParent = appRoutes.find((i) =>
      i.child?.find((a) => `${i.path}/${a.path}` === pathname)
    )?.path
    if (pathParent) {
      handleSetLocalOpenKey(pathParent)
      setSelectedKey([
        pathname,
        pathParent,
      ]);
      setOpenKeys([pathParent])
    } else {
      setSelectedKey([
        pathname,
      ]);
      handleRemoveLocal("openKeyLocal")
      setOpenKeys([""])
    }
  }

  const handleSetLocalSelectedKey = (selectedKeyLocal: string) => {
    window.sessionStorage.setItem(
      "selectedKeyLocal",
      selectedKeyLocal
    )
  }

  const handleRemoveLocal = (payload: "selectedKeyLocal" | "openKeyLocal") => {
    window.sessionStorage.removeItem(payload);
  };

  const selectedKeyLocal = window.sessionStorage.getItem("selectedKeyLocal");
  const openKeyLocal = window.sessionStorage.getItem("openKeyLocal");

  const handleNavigation = (path: string) => {
    navigation(path)
    handleSetLocalSelectedKey(path)
  }

  const getItem = (
    label: React.ReactNode,
    key: React.ReactNode,
    icon?: React.ReactNode,
    children?: MenuItem[]
  ): MenuItem => {
    return {
      label,
      key,
      icon,
      children,
    } as MenuItem;
  }

  const items: MenuItem[] = appRoutes.map((item) => {
    if (!item.child || item.child.every((i) => !!i.hiddenMenu != false)) {
      if (item.hiddenMenu) {
        return null;
      }
      const label = <div>{item.sidebarProps?.displayText}</div>;
      const key = item.path;
      const icon = item.sidebarProps?.icon;
      return getItem(label, key, icon);
    } else {
      const data: {
        label: string | undefined;
        path: string | undefined;
        icon: React.ReactNode;
        hiddenMenu: boolean;
      }[] = [];
      for (const child of item.child) {
        data.push({
          label: child.sidebarProps?.displayText,
          path: `${item.path}/${child.path}`,
          icon: child.sidebarProps?.icon,
          hiddenMenu: !!child.hiddenMenu,
        });
      }
      const label = <div>{item.sidebarProps?.displayText}</div>;
      const key = item.path;
      const icon = item.sidebarProps?.icon;
      const children = data.map((itemChild) => {
        if (itemChild.hiddenMenu) {
          return null;
        }
        const keyChild = itemChild.path;
        const labelChild = <div>{itemChild.label}</div>;
        const iconChild = itemChild.icon;
        return getItem(labelChild, keyChild, iconChild);
      });
      return getItem(label, key, icon, children);
    }
  });

  return {
    selectedKeyLocal,
    openKeyLocal,
    handleRemoveLocal,
    handleSetLocalOpenKey,
    handleSetLocalSelectedKey,
    selectedKey, setSelectedKey,
    openKeys, setOpenKeys,
    handleChangePage,
    handleNavigation,
    items
  };
};
