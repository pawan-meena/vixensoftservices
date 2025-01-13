"use client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MetaTags from "@/components/MetaTags";

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const router = useRouter();

  const maintenanceEndDate = new Date("2025-01-10 10:00:00").getTime();

  useEffect(() => {
    const countdown = () => {
      const now = new Date().getTime();
      const timeRemaining = maintenanceEndDate - now;

      if (timeRemaining > 0) {
        const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (timeRemaining % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

        setTimeLeft({
          days,
          hours,
          minutes,
          seconds,
        });
      }
    };

    const interval = setInterval(countdown, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#ef486c] to-[#4d64af] text-white">
      <MetaTags />
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Background Bubbles */}
        <div className="absolute top-0 left-0 w-full h-full z-[1]">
          <div
            className="circle"
            style={{ width: "150px", height: "150px", top: "10%", left: "20%" }}
          ></div>
          <div
            className="circle"
            style={{ width: "200px", height: "200px", top: "50%", left: "70%" }}
          ></div>
          <div
            className="circle"
            style={{ width: "100px", height: "100px", top: "80%", left: "30%" }}
          ></div>
        </div>

        <div className="text-center animate-fadeIn relative z-10">
          <h1 className="text-3xl sm:text-6xl font-bold mb-4">
            We're Under Maintenance
          </h1>
          <p className="text-lg sm:text-2xl mt-4 font-thin mx-auto">
            Our site is currently undergoing scheduled maintenance. We'll be
            back soon. Thank you for your patience!
          </p>

          <div className="flex justify-center gap-20 mt-8">
            <div>
              <span className="block text-3xl font-bold">
                {timeLeft.days.toString().padStart(2, "0")}
              </span>
              Days
            </div>
            <div>
              <span className="block text-3xl font-bold">
                {timeLeft.hours.toString().padStart(2, "0")}
              </span>
              Hours
            </div>
            <div>
              <span className="block text-3xl font-bold">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </span>
              Minutes
            </div>
            <div>
              <span className="block text-3xl font-bold">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </span>
              Seconds
            </div>
          </div>

          <div className="mt-4">
            <p className="text-sm">
              &copy; 2025 VixenSoftServices Pvt Ltd | Contact:{" "}
              <a href="mailto:info@vixensoftservices.com" className="underline">
                info@vixensoftservices.com
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* <Footer /> */}

      <style jsx>{`
        .circle {
          position: absolute;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.1);
          animation: move 10s linear infinite;
        }

        @keyframes move {
          0% {
            transform: translateY(0) scale(0.8);
          }
          50% {
            transform: translateY(50vh) scale(1.2);
          }
          100% {
            transform: translateY(-10vh) scale(0.8);
          }
        }
      `}</style>
    </div>
  );
}
