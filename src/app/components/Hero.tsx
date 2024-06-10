"use client";

import { NextPage } from "next";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import Link from "next/link";

interface Props {}

const Hero: NextPage<Props> = ({}) => {
  // animation hooks
  useGSAP(() => {
    gsap.to("#heroTitle", {
      opacity: 1,
      delay: 1,
    });

    gsap.to("#cta", {
      opacity: 1,
      delay: 1.2,
      y: -20,
    });
  }, []);

  // video resize state
  const [videoUrl, setVideoUrl] = useState(
    window.innerWidth < 750
      ? "/assets/videos/smallHero.mp4"
      : "/assets/videos/hero.mp4"
  );

  const handleVideoUrl = () => {
    if (window.innerWidth < 750) {
      setVideoUrl("/assets/videos/smallHero.mp4");
    } else {
      setVideoUrl("/assets/videos/hero.mp4");
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleVideoUrl);
    return () => window.removeEventListener("resize", handleVideoUrl);
  }, []);

  return (
    <section className="w-full h-[calc(100vh-60px)] bg-black relative">
      <div className="h-5/6 flex items-center justify-center flex-col">
        {/* heor title */}
        <p id="heroTitle" className="hero-title">
          iPhone 15 Pro
        </p>
        {/* video player */}
        <div className="md:w-10/12 w-9/12">
          <video autoPlay muted loop playsInline>
            <source src={videoUrl} type="video/mp4" />
          </video>
        </div>

        <div
          id="cta"
          className="flex flex-col items-center opacity-0 translate-y-20"
        >
          <Link href={"/"} className="btn">
            Buy
          </Link>
          <p className="font-normal text-xl">From $199/month or $999</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
