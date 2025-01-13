import React, { useState, useEffect } from "react";
import Link from "next/link";

const notfound = () => {
  return (
    <div className="min-h-screen w-full bg-background flex sm:flex-row flex-col-reverse text-customGray ">
      <div className="sm:w-1/2 w-full sm:h-[100vh] sm:pl-[10%] h-[50vh]  sm:pt-0 pt-[50px] flex  flex-col sm:items-start items-center gap-4 sm:justify-center justify-start">
        <div className="hidden sm:flex mb-[3rem] items-center font-poppinsSemibold600 text-[4.5rem] gap-1">
          <div className=""></div>
          <div>Vixen Soft Services</div>
        </div>
        <h1 className="font-poppinsSemibold600 sm:text-[30px] text-[16px]">
          404 Error - Page Not Found
        </h1>
        <h5 className="font-poppinsMedium500 sm:text-[23px] text-[14px] text-customGray/25 sm:text-left text-center sm:px-[0rem] px-[2rem]">
          The page you’re looking for doesn’t exist. It might have been moved or
          deleted.
        </h5>
        <Link href="/">
          <button className="sm:mt-10 sm:font-poppinsSemibold600 font-poppinsMedium500 text-customYellow sm:text-[23px] text-[14px] outline-none sm:border-[3px] border-[1px] rounded-[50px] sm:px-[3rem] sm:py-2 px-6 py-1  border-customBorder">
            Go Back Home
          </button>
        </Link>
      </div>
      <div className="sm:w-1/2 sm:pr-[10%] w-full sm:h-[100vh] h-[50vh] flex sm:items-center items-end justify-center ">
        <div className="sm:scale-[1.6]"></div>
      </div>
    </div>
  );
};

export default notfound;
