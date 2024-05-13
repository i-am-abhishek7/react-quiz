import { useEffect } from "react";

export default function Timer({ dispatch, secondsRemaining }) {
  const minus = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(() => {
    const timerId = setInterval(() => {
      dispatch({ type: "tick" });
    }, 1000);

    return () => clearInterval(timerId);
  }, [dispatch]);

  return (
    <div className="timer">
      {minus < 10 && "0"}
      {minus}:{seconds < 10 && "0"}
      {seconds}
    </div>
  );
}
