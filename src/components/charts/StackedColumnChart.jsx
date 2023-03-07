import Icons from "../Icons";

export default function StackedColumnChart({ dataArray }) {
  const arraysHandler = (rawData) => {
    let arr = [];
    rawData.forEach((i) => {
      arr.push(i.valuesPerMonths);
    });
    return arr;
  };

  const maxTotalColValue = (arrays) => {
    let total = 0;
    arrays[0].forEach((z, index) => {
      let tempTotal = arrays.reduce((total, current) => {
        return current[index] + total;
      }, 0);
      if (total < tempTotal) {
        total = tempTotal;
      }
    });
    return Math.ceil(total / 100) * 100;
  };

  const matrixCreater = (arrays) => {
    let arr = [];
    arrays[0].forEach((z, index) => {
      let tempArr = [];
      arrays.forEach((array) => {
        tempArr.push(array[index]);
      });
      arr.push(tempArr);
    });
    return arr;
  };

  const maxValue = maxTotalColValue(arraysHandler(dataArray));

  const rowStats = new Array(5).fill(0).map((z, index) => (
    <span
      className="font-dmsans text-[10px] leading-normal opacity-40"
      key={index}
    >
      {index * (maxValue / 4 / 100) * 100}
    </span>
  ));

  const sticksStacked = (matrix) => {
    return matrix.map((ratio, index) => (
      <div
        key={index}
        style={{
          height: `${
            index === 0 || ratio === 0
              ? `calc(${(ratio / maxValue) * 100}%`
              : `calc(${(ratio / maxValue) * 100}% + ${index * 8}px)`
          }`,
          zIndex: 10 - index,
          bottom: `calc(${
            (matrix.reduce(
              (acc, curr, ind) => (ind < index ? acc + curr : acc),
              0
            ) /
              maxValue) *
            100
          }% - ${index * 8}px)`,
          backgroundColor: dataArray[index].color,
        }}
        className={`absolute rounded-full w-full`}
      ></div>
    ));
  };

  const stackedColumns = matrixCreater(arraysHandler(dataArray)).map(
    (matrix, index) => (
      <div
        key={index}
        className="w-3 h-full relative flex items-center flex-col-reverse"
      >
        {sticksStacked(matrix)}
        <div className="absolute -bottom-6 font-dmsans text-[10px] leading-normal opacity-40">
          {index + 1 < 10 ? `0${index + 1}` : index + 1}
        </div>
      </div>
    )
  );

  return (
    <div className="flex flex-col w-full bg-white p-[30px] rounded-[10px] gap-6">
      <div className="flex items-start lg:items-center justify-between">
        <div className="flex lg:flex-row flex-col lg:items-center gap-5">
          {dataArray.map((el, index) => (
            <div className="flex items-center gap-[6px]" key={index}>
              <span
                style={{ backgroundColor: el.color }}
                className={`w-[14px] h-[14px] rounded-full`}
              ></span>
              {el.name}
            </div>
          ))}
        </div>
        <button>
          <Icons className={"opacity-20"} iconName={"more"} />
        </button>
      </div>
      <div className="flex gap-7 py-6">
        <div className="flex h-[207px] flex-col-reverse justify-between">
          {rowStats}
        </div>
        <div className="w-full flex justify-between items-end">
          {stackedColumns}
        </div>
      </div>
    </div>
  );
}
