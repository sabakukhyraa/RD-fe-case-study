import Icons from "./Icons";

export default function DataTable({ dummyData, isChoisable, onStateChange }) {
  const mapper = dummyData.map((el, index) => (
    <li
      className="grid grid-cols-2 gap-y-2 lg:gap-0 lg:grid-cols-6 text-xl text-black bg-white w-full px-[30px] py-[27px]"
      key={index}
    >
      <span className="col-span-2 lg:p-0 pb-4 flex lg:justify-start lg:font-normal font-semibold justify-between items-center gap-[10px]">
        {isChoisable && (
          <button
            onClick={() =>
              onStateChange(index, { ...el, selected: !el.selected })
            }
            className={`w-[30px] h-[30px] order-1 lg:!-order-1 relative rounded-[10px] ${
              el.selected ? "bg-active-blue" : "bg-secondary"
            } flex items-center justify-center`}
          >
            {el.selected && <Icons iconName={"check"} />}
          </button>
        )}
        {el.name}
      </span>
      <span className="lg:hidden opacity-60">Status</span>
      <span className="lg:text-start text-end">{el.status}</span>
      <span className="lg:hidden opacity-60">Size</span>
      <span className="lg:text-start text-end">{el.size}</span>
      <span className="lg:hidden opacity-60">Date</span>
      <span className="lg:text-start text-end">{el.date}</span>
      <span className="lg:hidden opacity-60">Time</span>
      <span className="lg:text-start text-end">{el.time}</span>
    </li>
  ));

  return (
    <ul className="flex bg-transparent flex-col gap-1 lg:gap-px w-full">
      {dummyData.length ? (
        mapper
      ) : (
        <p className="self-center w-full text-center bg-white rounded-[10px] text-3xl py-8 font-extralight">
          There are no members at this moment.
        </p>
      )}
    </ul>
  );
}
