import React, { useEffect } from "react";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { first, last } from "lodash-es";
import { MenuInfo } from "rc-menu/lib/interface";

import { useMenuNavigation } from "./useHook";
import { useLocation } from "react-router-dom";


const MenuSideBar: React.FC = () => {
  const location = useLocation()
  const {
    handleSetLocalSelectedKey,
    selectedKey,
    openKeys,
    setOpenKeys,
    handleChangePage,
    selectedKeyLocal,
    handleNavigation,
    items
  } = useMenuNavigation();

  useEffect(() => {
    handleChangePage(selectedKeyLocal!)
  }, [selectedKeyLocal]);

  useEffect(() => {
    location.pathname === "/" ? handleNavigation(`${first(items)!.key}`) : handleSetLocalSelectedKey(location.pathname)
  }, []);

  const handleClick = (value: MenuInfo) => {
    handleNavigation(value.key)
  };

  const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
    const latestOpenKey = last(keys);
    if (latestOpenKey) {
      setOpenKeys(keys);
    } else {
      setOpenKeys([""]);
    }
  };

  return (
    <Menu
      theme="dark"
      mode="inline"
      items={items}
      onClick={(e) => handleClick(e)}
      selectedKeys={selectedKey}
      openKeys={openKeys}
      onOpenChange={onOpenChange}
    />
  );
};

export default MenuSideBar;
