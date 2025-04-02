import React, { useEffect, useState } from "react";
import { MdManageHistory } from "react-icons/md";
import { MdOutlineExpandMore } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { IconMenu } from "./index";

const SideBar = () => {
  const userLogin = useSelector((state) => state?.userLogin);
  const [activeMenu, setActiveMenu] = useState({ menu: 0, active: false });
  const location = useLocation();
  const pahtnameActive = location.pathname;
  const menus = userLogin ? userLogin.Role.Menus : "";
  menus.sort((a, b) => a.order - b.order);

  const viewSubMenu = (menu) => {
    setActiveMenu((prevState) => {
      if (prevState.menu !== menu) {
        return { menu, active: true };
      } else {
        return { menu: 0, active: false };
      }
    });
  };

  useEffect(() => {
    menus.map((menu) => {
      if (pahtnameActive === menu.path) {
        setActiveMenu({ menu: menu.parentMenu, active: true });
      }
    });
  }, [pahtnameActive, menus]);

  return (
    <div className="flex flex-col justify-start text-center items-center px-2  w-16  pt-4  h-screen  bg-gradient-to-r from-gray-600 to-gray-500  group  hover:w-[210px]">
      <NavLink
        className={({ isActive }) =>
          isActive
            ? "flex flex-col items-center text-white"
            : "flex flex-col items-center"
        }
        to="/home"
      >
        <MdManageHistory className="size-12 group-hover:size-16  hover:text-white" />
        <label className="hidden group-hover:block text-sm pt-1">
          Mantenimiento Control
        </label>
      </NavLink>

      <div className="flex flex-col items-start pt-6 w-full ">
        {menus?.map((menu, index) => (
          <React.Fragment key={index}>
            {menu.level === 1 &&
              !menus.find((menux) => menux.parentMenu === menu.order) && (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "hidden group-hover:flex items-center justify-evenly py-2 text-white rounded-md bg-white/30  w-full"
                      : "hidden group-hover:flex items-center justify-evenly py-2  text-gray-950  rounded-md hover:bg-white/30 w-full"
                  }
                  onClick={() => viewSubMenu(menu.order)}
                  to={menu.path}
                >
                  <div className="w-[20%] text-white flex  justify-center">
                    <IconMenu menu={menu.order} />
                  </div>
                  <h1 className="hidden group-hover:flex text-sm text-white w-[70%] ">
                    {menu.nameFront}
                  </h1>
                  {menus.find((menux) => menux.parentMenu === menu.order) ? (
                    menu.order === activeMenu.menu && activeMenu.active ? (
                      <div className="w-[10%] flex   justify-center">
                        <MdOutlineExpandMore className="size-5 rotate-180 " />
                      </div>
                    ) : (
                      <div className="w-[10%] flex  justify-center">
                        <MdOutlineExpandMore className="size-5 " />
                      </div>
                    )
                  ) : (
                    <div className="w-[10%] "></div>
                  )}
                </NavLink>
              )}
            {menu.level === 1 &&
              menus.find((menux) => menux.parentMenu === menu.order) && (
                <div
                  className={
                    menu.order === activeMenu.menu && activeMenu.active
                      ? "hidden group-hover:flex items-center justify-evenly text-gray-950 rounded-md bg-white/30 py-2  w-full cursor-pointer"
                      : "hidden group-hover:flex items-center justify-evenly text-gray-950 rounded-md hover:bg-white/30 py-2 w-full cursor-pointer"
                  }
                  onClick={() => viewSubMenu(menu.order)}
                >
                  <div className="w-[20%] text-white flex  justify-center">
                    <IconMenu menu={menu.order} />
                  </div>
                  <h1 className="hidden group-hover:flex text-sm text-white w-[70%] ">
                    {menu.nameFront}
                  </h1>
                  {menus.find((menux) => menux.parentMenu === menu.order) ? (
                    menu.order === activeMenu.menu && activeMenu.active ? (
                      <div className="w-[10%] text-white flex justify-center  ">
                        <MdOutlineExpandMore
                          name={menu.parentMenu}
                          className="size-5 rotate-180"
                        />
                      </div>
                    ) : (
                      <div className="w-[10%] text-white flex justify-center ">
                        <MdOutlineExpandMore
                          name={menu.parentMenu}
                          className="size-5"
                        />
                      </div>
                    )
                  ) : (
                    <div className="w-[20%]   "></div>
                  )}
                </div>
              )}
            {menu.level === 2 && (
              <NavLink
                className={({ isActive }) =>
                  isActive &&
                  menu.parentMenu === activeMenu.menu &&
                  activeMenu.active
                    ? "hidden group-hover:flex justify-around items-start text-white w-full rounded-md bg-white/30 "
                    : menu.parentMenu === activeMenu.menu && activeMenu.active
                    ? "hidden group-hover:flex justify-around items-start text-white w-full rounded-md "
                    : "hidden "
                }
                to={menu.path}
              >
                <div className="flex justify-center animate-fade w-[20%] h-full">
                  {activeMenu.menu + 0.1 === menu.order ? (
                    <div className="bg-white w-1 h-full rounded-t-sm"></div>
                  ) : (
                    <div className="bg-white w-1 h-full  "></div>
                  )}
                </div>
                <h2 className="text-sm  animate-fade-right w-[85%] p-2 hover:bg-white/30 rounded-md text-start">
                  {menu.nameFront}
                </h2>
              </NavLink>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
