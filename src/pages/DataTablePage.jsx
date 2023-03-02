import DataTable from "../components/DataTable";
import { StoreContext } from "../App";
import { useContext } from "react";
import Icons from "../components/Icons";

export default function DataTablePage() {
  const { tempData, setTempData } = useContext(StoreContext);

  const updateArray = (index, newValue) => {
    const newArray = [...tempData.members];
    newArray[index] = newValue;
    setTempData((prev) => ({ ...prev, members: newArray }));
  };

  return (
    <div className="flex flex-col">
      <div className="pt-10 pb-9 px-10 bg-white">
        <h1 className="font-bold text-2xl">Members</h1>
      </div>
      <div className="flex flex-col lg:flex-row lg:self-end lg:gap-4 p-1 gap-1 lg:p-9">
        <button className="py-3 px-7 font-semibold lg:w-auto lg:-order-1 order-1 w-full bg-transparent border border-opacity-[0.12] border-black rounded-[10px]">
          Reject
        </button>
        <button
          onClick={() => tempData.members?.filter((el) => el.selected)}
          className="py-3 px-5 font-semibold bg-active-blue lg:w-auto w-full text-white rounded-[10px]"
        >
          Approve
        </button>
      </div>
      <div className="p-1 lg:p-10 !pt-0">
        <div className="hidden lg:grid grid-cols-6 text-xl text-black text-opacity-40 w-full mb-3">
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
        <DataTable
          dummyData={tempData?.members}
          isChoisable={true}
          onStateChange={updateArray}
        />
      </div>
    </div>
  );
}
