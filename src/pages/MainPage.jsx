import Avatar from "../components/Avatar";
import DataTable from "../components/DataTable";
import Icons from "../components/Icons";
import StackedColumnChart from "../components/charts/StackedColumnChart";
import CircularProgressChart from "../components/charts/CircularProgressChart";
import { StoreContext } from "../App";
import { useContext } from "react";

export default function Main() {

  const {tempData} = useContext(StoreContext);

  const friends = [
    {
      user: "user1",
      photoURL: "/assets/Avatar2.jpg",
      isOnline: true,
    },
    {
      user: "user1",
      photoURL: "/assets/Avatar3.jpg",
      isOnline: false,
    },
    {
      user: "user1",
      photoURL: "/assets/Avatar4.jpg",
      isOnline: false,
    },
  ];

  return (
    <div className="flex flex-col">
      <div className="flex lg:justify-between items-center py-[30px] px-10 bg-white">
        <div className="flex gap-3">
          <Icons iconName={"search"} />
          <input
            className="outline-none text-sm placeholder:opacity-40"
            placeholder="Search"
            type="text"
          />
        </div>
        <div className="hidden lg:flex items-center py-[2px] gap-[10px]">
          {friends.map((user, index) => (
            <Avatar
              key={index}
              source={user.photoURL}
              isOnline={user.isOnline}
            />
          ))}
          <button className="flex justify-center items-center w-11 h-11 rounded-full bg-chart-1-dark">
            <Icons iconName={"plus"} />
          </button>
        </div>
      </div>
      <div className="p-1 lg:p-10 grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className=" flex flex-col col-span-1 lg:col-span-2">
          <div className="bg-white flex flex-col p-[30px] !pb-0 rounded-t-[10px]">
            <h2 className="font-medium text-[22px] leading-tight pb-6">
              Title
            </h2>
            <div className="hidden lg:grid grid-cols-6 text-xl text-black text-opacity-40 bg-white w-full mb-3">
              <span className="col-span-2 flex items-center gap-2">
                Name
                <button>
                  <Icons className={"opacity-40"} iconName={"search"} />
                </button>
              </span>
              <span className="flex items-center gap-2">
                Status: All
                <button>
                  <Icons className={"rotate-90 opacity-40"} iconName={"more"} />
                </button>
              </span>
              <span className="flex items-center gap-2">
                Size
                <button>
                  <Icons className={"opacity-40"} iconName={"order"} />
                </button>
              </span>
              <span className="flex items-center gap-2">
                Date
                <button>
                  <Icons className={"rotate-90 opacity-40"} iconName={"more"} />
                </button>
              </span>
              <span className="flex items-center gap-2">
                Time
                <button>
                  <Icons className={"rotate-90 opacity-40"} iconName={"more"} />
                </button>
              </span>
            </div>
          </div>
          <DataTable
            dummyData={tempData.members?.slice(0, 3) || []}
            isChoisable={false}
          />
        </div>
        <StackedColumnChart dataArray={tempData?.columnsData} />
        <CircularProgressChart dataArray={tempData?.circleRatioData} />
      </div>
    </div>
  );
}
