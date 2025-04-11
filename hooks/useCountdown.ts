import { useEffect, useRef, useState } from "react";

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const useCountdown = (startSeconds: number) => {
  const [timeLeft, setTimeLeft] = useState<number>(startSeconds);
  const [running, setRunning] = useState(false);

  const runningCurrent = useRef(running);

  useEffect(() => {
    runningCurrent.current = running;
  }, [running]);

  useEffect(() => {
    const tick = async () => {
      console.log("starting tick");
      let current = startSeconds;
      setRunning(true);

      await delay(1000);
      while (runningCurrent.current && current > 0) {
        console.log("inside while: ", current);
        console.log("inside while, running: ", running);
        current--;
        setTimeLeft(current);
        await delay(1000);
      }

      console.log("setting running to false");
      setRunning(false);
    };

    console.log("might be starting tick: ", running);
    if (running) tick();
  }, [running]);

  return {
    timeLeft,
    running,
    start: () => setRunning(true),
    cancel: () => {
      console.log("cancel called");
      setRunning(false);
      setTimeLeft(startSeconds);
    },
  };
};
