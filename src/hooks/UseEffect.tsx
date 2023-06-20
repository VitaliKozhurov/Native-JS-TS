import { FC, useEffect, useState } from "react";

const Timer: FC<{ intervalValue: number }> = ({ intervalValue }) => {
    const [timerValue, setTimerValue] = useState<number>(0);

    useEffect(() => {
        let intervalID = setInterval(() => {
            setTimerValue((timerValue) => timerValue + 1);
        }, intervalValue);

        return () => {
            clearInterval(intervalID);
        };
    }, [intervalValue]);

    return (
        <div>
            <h1>Timer</h1>
            <h2>{timerValue}</h2>
        </div>
    );
};

export const UseEffect = () => {
    const [intervalValue, setIntervalValue] = useState<number>(1000);

    const handleIntervalClick = (time: number) => {
        setIntervalValue(time);
    };

    return (
        <div>
            <Timer intervalValue={intervalValue} />
            <div>
                <button onClick={() => handleIntervalClick(100)}>100ms</button>
            </div>
            <div>
                <button onClick={() => handleIntervalClick(500)}>500ms</button>
            </div>
            <div>
                <button onClick={() => handleIntervalClick(1000)}>
                    1000ms
                </button>
            </div>
        </div>
    );
};
