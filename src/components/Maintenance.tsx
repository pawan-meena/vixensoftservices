"use client";
import { useEffect, useState } from 'react';

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Maintenance = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const countdown = () => {
      const maintenanceEndDate = new Date('2025-01-10 10:00:00').getTime();
      const now = new Date().getTime();
      const timeRemaining = maintenanceEndDate - now;

      if (timeRemaining > 0) {
        setTimeLeft({
          days: Math.floor(timeRemaining / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((timeRemaining % (1000 * 60)) / 1000)
        });
      }
    };

    const timer = setInterval(countdown, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-[#ef486c] to-[#4d64af] text-[#eddde1] overflow-hidden">
      <div className="relative">
        {/* Animated circles */}
        <div className="absolute inset-0 z-0">
          <div className="absolute w-[150px] h-[150px] top-[10%] left-[20%] rounded-full bg-white/10 animate-float"></div>
          <div className="absolute w-[200px] h-[200px] top-[50%] left-[70%] rounded-full bg-white/10 animate-float"></div>
          <div className="absolute w-[100px] h-[100px] top-[80%] left-[30%] rounded-full bg-white/10 animate-float"></div>
        </div>

        <div className="text-center relative z-10 p-6">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">We're Under Maintenance</h1>
          <p className="text-lg md:text-2xl mb-8">
            Our site is currently undergoing scheduled maintenance. We'll be back soon.
            Thank you for your patience!
          </p>

          <div className="flex justify-center gap-8 md:gap-20">
            <div>
              <span className="block text-3xl font-bold">
                {timeLeft.days.toString().padStart(2, '0')}
              </span>
              <span>Days</span>
            </div>
            <div>
              <span className="block text-3xl font-bold">
                {timeLeft.hours.toString().padStart(2, '0')}
              </span>
              <span>Hours</span>
            </div>
            <div>
              <span className="block text-3xl font-bold">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </span>
              <span>Minutes</span>
            </div>
            <div>
              <span className="block text-3xl font-bold">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </span>
              <span>Seconds</span>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-sm">
              &copy; 2025 VixenSoftServices Pvt Ltd | Contact:{" "}
              <a href="mailto:info@vixensoftservices.com" className="underline hover:text-white">
                info@vixensoftservices.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Maintenance;