import React, { useState, useEffect } from 'react';
import { TimeLeft } from '../types';

const BIRTHDAY_DATE = new Date().getFullYear() + "-12-31";

const Countdown: React.FC = () => {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(BIRTHDAY_DATE) - +new Date();
    let timeLeft: TimeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!hasMounted) return null;

  const isBirthday = 
    timeLeft.days <= 0 && 
    timeLeft.hours <= 0 && 
    timeLeft.minutes <= 0 && 
    timeLeft.seconds <= 0;

  if (isBirthday) {
    return (
      <div className="text-center animate-bounce">
        <h2 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg font-script">
          It's Party Time!
        </h2>
      </div>
    );
  }

  return (
    <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-white">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center bg-white/20 backdrop-blur-md rounded-xl p-4 min-w-[80px] md:min-w-[100px] border border-white/30 shadow-xl">
          <span className="text-3xl md:text-5xl font-bold font-mono">
            {value.toString().padStart(2, '0')}
          </span>
          <span className="text-xs md:text-sm uppercase tracking-widest mt-1 opacity-90">
            {unit}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Countdown;