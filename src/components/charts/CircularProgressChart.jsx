import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Icons from "../Icons"

export default function CircularProgressChart({ dataArray }) {
  const mapper = dataArray.map((data, index) => (
    <li className="w-[126px]" key={index}>
      <CircularProgressbar
        styles={{
          path: {
            stroke: `${data.strokeColor}`,
          },
          trail: {
            stroke: "rgba(255, 255, 255, 0)",
          },
          text: {
            fill: "#000",
            fontSize: "16px",
          },
          background: {
            fill: data.bgColor,
          },
        }}
        background={true}
        strokeWidth={8}
        value={data.ratio * 100}
        text={`${data.ratio * 100}%`}
      />
    </li>
  ));

  return (
    <div className="flex flex-col w-full bg-white p-[30px] rounded-[10px] gap-6">
      <div className="flex items-start justify-between">
        <div className="space-y-3">
          <h1 className="text-[22px] font-medium">Title</h1>
          <div className="flex lg:flex-row flex-col lg:items-center gap-5">
            {dataArray.map((el, index) => (
              <div className="flex items-center gap-[6px]" key={index}>
                <span
                  style={{ backgroundColor: el.strokeColor }}
                  className={`w-[14px] h-[14px] rounded-full`}
                ></span>
                {el.name}
              </div>
            ))}
          </div>
        </div>
        <button>
          <Icons className={"opacity-20"} iconName={"more"} />
        </button>
      </div>
      <ul className="flex gap-[30px] items-center flex-col lg:flex-row font-dmsans">
        {mapper}
      </ul>
      <div>
        <p className="text-sm opacity-40">
          Every large design company whether it’s a multi-national branding
          corporation or a regular down at heel tatty magazine publisher needs
          to fill holes in the workforce.
        </p>
      </div>
    </div>
  );
}
