import React, { useEffect, useState } from "react";

export default function CountdownTimer({ expiryDate }) {
  const timeLeftInSeconds = (expiryDate - Date.now()) / 1000;
  const startTime = Date.now();

  const [seconds, setSeconds] = useState(timeLeftInSeconds);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  function updateTimer() {
    const secondsElapsed = (Date.now() - startTime) / 1000;
    const updateCountdown = timeLeftInSeconds - secondsElapsed;

    setSeconds(Math.floor(updateCountdown) % 60);
    setMinutes(Math.floor(updateCountdown / 60) % 60);
    setHours(Math.floor(updateCountdown / (60 * 60)) % 24);
  }

  useEffect(() => {
    const interval = setInterval(() => updateTimer(), 1000);
    return () => clearInterval(interval);
  }, []);

  if (timeLeftInSeconds < 0) {
    return (
        <div></div>
    )
  }

  return (
    <div className="de_countdown">
      {seconds < 0 ? (
        <span> EXPIRED </span>
      ) : (
        <span>
          {hours}h {minutes}m {seconds}s
        </span>
      )}
    </div>
  );
}
