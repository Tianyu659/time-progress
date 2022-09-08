// import './App.css';
import { useState, useEffect } from "react";
import MainProgressBar from "./Components/MainProgressBar";

function App() {
  const dates = [
    // [Date("2022-08-22"), Date("2022-12-03")],
    [1661126400000, 1670025600000],
    // [Date("2022-01-01"), Date("2023-01-01")],
    [1640995200000, 1672531200000],
  ];

  // 0: semester
  // 1: year
  const [target, setTarget] = useState(0);
  const [now, setNow] = useState(new Date());

  const [left, setLeft] = useState(true);

  var diff = dates[target][1] - dates[target][0];
  var passed = now - dates[target][0];
  var percent = passed / diff;

  useEffect(() => {
    let secTimer = setInterval(() => {
      setNow(new Date());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  return (
    <div className="w-[80%] m-auto h-screen flex flex-col justify-center items-center">
      <div className="flex flex-row justify-center items-center text-[6em] leading-none">
        <div className="metro-black" onClick={() => setLeft(!left)}>
          How much<span className="opacity-0 select-none">+</span>
          <br />
          <span className="text-primary-focus">TIME</span>{" "}
          <span className="hover:underline">{left ? "left in" : "into"}</span>
        </div>
        <div className="flex flex-col items-end metro-extra-bold">
          <span
            className={
              target === 0
                ? "text-primary"
                : "text-secondary opacity-30 hover:opacity-75"
            }
            tooltip="Semester"
            onClick={() => setTarget(0)}
          >
            Semester
          </span>
          <span
            className={
              target === 1
                ? "text-primary"
                : "text-secondary opacity-30 hover:opacity-75"
            }
            onClick={() => setTarget(1)}
          >
            Year
          </span>
        </div>
      </div>
      <div className="w-full flex justify-center my-4">
        <MainProgressBar percent={percent} />
      </div>
      <div>
        <span className={(left || "text-primary ") + " text-9xl"}>
          {left
            ? ((1 - percent) * 100).toPrecision(8)
            : (percent * 100).toPrecision(8)}
          %
        </span>
        <br/>
        <span>
          {
            // show passed in days, hours, minutes, seconds
            left ? (
              <>
                {Math.floor((diff - passed) / 86400000)} days,{" "}
                {Math.floor(((diff - passed) % 86400000) / 3600000)} hours,{" "}
                {Math.floor((((diff - passed) % 86400000) % 3600000) / 60000)}{" "}
                minutes,{" "}
                {Math.floor(
                  ((((diff - passed) % 86400000) % 3600000) % 60000) / 1000
                )}{" "}
                seconds
              </>
            ) : (
              <>
                {Math.floor(passed / 86400000)} days,{" "}
                {Math.floor((passed % 86400000) / 3600000)} hours,{" "}
                {Math.floor(((passed % 86400000) % 3600000) / 60000)} minutes,{" "}
                {Math.floor((((passed % 86400000) % 3600000) % 60000) / 1000)}{" "}
                seconds
              </>
            )
          }
        </span>
      </div>
    </div>
  );
}

export default App;
