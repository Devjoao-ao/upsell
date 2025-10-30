import React, { useState, useEffect } from 'react';

interface TimerProps {
  initialSeconds: number;
  onTimerEnd: () => void;
}

const Timer: React.FC<TimerProps> = ({ initialSeconds, onTimerEnd }) => {
  const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

  useEffect(() => {
    if (secondsLeft <= 0) {
      onTimerEnd();
      return;
    }

    const intervalId = setInterval(() => {
      setSecondsLeft((prevSeconds) => prevSeconds - 1);
    }, 1000);

    return () => clearInterval(intervalId);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [secondsLeft]);

  const minutes = Math.floor(secondsLeft / 60);
  const seconds = secondsLeft % 60;

  return (
    <span className="font-bold text-lg tabular-nums">
      {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
    </span>
  );
};

export default Timer;
