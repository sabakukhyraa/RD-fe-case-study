import { NavLink } from "react-router-dom";
import Icons from "./Icons";

export default function TheSidebar() {
  return (
    <div className="h-[1000px] flex flex-col items-center py-10 gap-8 rounded-r-[20px] bg-white">
      <div className=" pb-0">
        <img
          className="rounded-full aspect-square object-cover w-9 h-9"
          src="/assets/Avatar1.jpg"
          alt=""
        />
      </div>
      <span className="w-12 lg:w-[70px] mx-[13px] h-px rounded-full bg-black bg-opacity-20"></span>
      <div className="flex h-full flex-col items-center justify-between">
        <div className="flex flex-col items-center justify-start gap-[70px]">
          <NavLink to={"/"}>
            <Icons iconName={"avatar"} />
          </NavLink>
          <NavLink to={"/data-table"}>
            <Icons iconName={"download"} />
          </NavLink>
          <NavLink to={"/c"}>
            <Icons iconName={"analyse"} />
          </NavLink>
          <NavLink to={"/d"}>
            <Icons iconName={"gallery"} />
          </NavLink>
          <NavLink to={"/e"}>
            <Icons iconName={"calendar"} />
          </NavLink>
          <NavLink to={"/f"}>
            <Icons iconName={"trend"} />
          </NavLink>
          <NavLink to={"/g"}>
            <Icons iconName={"chart"} />
          </NavLink>
        </div>
        <NavLink className={"place-self-end"} to={"/h"}>
          <Icons iconName={"settings"} />
        </NavLink>
      </div>
    </div>
  );
}
