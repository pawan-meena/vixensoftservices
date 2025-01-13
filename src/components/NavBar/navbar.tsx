"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ThreeLineIcon } from "@/components/ui/icons";
import { usePathname } from "next/navigation";
import { Toaster } from "react-hot-toast";

// Navbar configurations
const ROUTES = {
  HOME: "/",
  STUDIO: "/",
  DISCOVER: "/",
  WEBXR: "/",
} as const;

type RouteKey = keyof typeof ROUTES;

interface NavConfig {
  background: string;
  textColor: string;
  links: string[];
}

const NAV_CONFIGS: Record<string, NavConfig> = {
  [ROUTES.HOME]: {
    background: "bg-black",
    textColor: "text-customLightPink",
    links: ["#", "#", "#"],
  },
};

const getNavLogo = (path: string): JSX.Element | null => {
  switch (path) {
    case ROUTES.HOME:
      return (
        <div className="flex justify-start items-center space-x-4">
          <Image src="/logo.png" width={40} height={40} alt="vixen-logo" />
        </div>
      );

    case ROUTES.WEBXR:
      return (
        <Image
          src="/webxr_nav_logo.png"
          width={200}
          height={40}
          alt="webxr-logo"
        />
      );
    default:
      return null;
  }
};

const Navbar: React.FC = () => {
  const [isSideBarOpen, setIsSidebarOpen] = useState(false);
  const pathname = usePathname();
  const currentPath = pathname || ROUTES.HOME;

  const currentConfig =
    NAV_CONFIGS[pathname || ROUTES.HOME] || NAV_CONFIGS[ROUTES.HOME];

  return (
    <>
      <div
        className={`flex justify-between items-center py-4 px-4 sm:px-8 ${currentConfig.background} shadow-md`}
      >
        <Link href="/" className="flex justify-start items-center space-x-4">
          {getNavLogo(currentPath) ?? <div />}
        </Link>

        <div
          className={`hidden sm:flex ${currentConfig.textColor} justify-start space-x-4 items-center`}
        >
          {currentConfig.links.map((link) => (
            <Link
              key={link}
              href={`/${link}`}
              className={`px-2 hover:scale-110 transition-all ${
                pathname === `/${link}`
                  ? "text-customLightPink underline"
                  : currentConfig.textColor
              }`}
            >
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </Link>
          ))}
        </div>

        <div
          className="sm:hidden cursor-pointer"
          onClick={() => setIsSidebarOpen(true)}
        >
          <ThreeLineIcon />
        </div>
      </div>

      {/* Mobile Sidebar */}
      {isSideBarOpen && (
        <div className="transition-opacity duration-700 fixed inset-0 bg-black bg-opacity-50 z-50">
          <div
            className={`fixed top-0 left-0 w-3/4 max-w-xs h-full bg-black ${currentConfig.textColor} shadow-lg z-50`}
          >
            <div className="flex justify-between items-center px-4 py-4 border-b">
              <h2 className="text-lg font-bold">Menu</h2>
              <button
                className="text-gray-500 hover:text-gray-800"
                onClick={() => setIsSidebarOpen(false)}
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col space-y-4 p-4">
              {currentConfig.links.map((link) => (
                <Link
                  key={link}
                  href={`/${link}`}
                  className={`hover:underline ${
                    pathname === `/${link}`
                      ? "text-customLightPink underline"
                      : currentConfig.textColor
                  }`}
                  onClick={() => setIsSidebarOpen(false)}
                >
                  {link.charAt(0).toUpperCase() + link.slice(1)}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
