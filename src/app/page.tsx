"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import MetaTags from "@/components/MetaTags";
import Maintenance from "@/components/Maintenance";
import Navbar from "@/components/NavBar/navbar";
import Footer from "@/components/Footer/footer";

export default function Home() {
  return (
    <>
      <MetaTags />
      <Navbar/>
      <Footer/>
      {/* <Maintenance /> */}
    </>
  );
}