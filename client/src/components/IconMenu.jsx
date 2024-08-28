import React, { useEffect, useState } from "react";

//Icons menu
//Dasboard
import { LuLayoutDashboard } from "react-icons/lu";
//mantto
import { GrVmMaintenance } from "react-icons/gr";
//Recursos humanos
import { RiTeamLine } from "react-icons/ri";
//contabilidad
import { TbReportMoney } from "react-icons/tb";
//inventario
import { MdOutlineInventory } from "react-icons/md";
//Wizard
import { LiaArchiveSolid } from "react-icons/lia";

const IconMenu = (props) => {
  const { menu } = props && props;
  return (
    <>
      {menu === 1 ? <LuLayoutDashboard className="size-6 " /> : <></>}
      {menu === 2 ? <GrVmMaintenance className="size-6 " /> : <></>}
      {menu === 3 ? <RiTeamLine className="size-6 " /> : <></>}
      {menu === 4 ? <TbReportMoney className="size-6 " /> : <></>}
      {menu === 5 ? <MdOutlineInventory className="size-6 " /> : <></>}
      {menu === 6 ? <LiaArchiveSolid className="size-6 " /> : <></>}
    </>
  );
};

export default IconMenu;
