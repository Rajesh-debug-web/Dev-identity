import React, { useState, useEffect } from 'react';


const Clock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
  };

  return (
    <div className="flex flex-col items-start gap-0.5 text-left font-mono">
      <div className="text-lg font-bold text-blue-500 dark:text-blue-400 leading-none">
        {formatTime(time)}
      </div>
      <div className="text-xs font-medium text-neutral-500 dark:text-neutral-400">
        {formatDate(time)}
      </div>
    </div>
  );
};

export default Clock;
