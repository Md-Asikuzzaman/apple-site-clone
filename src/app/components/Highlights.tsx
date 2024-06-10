"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { NextPage } from "next";
import Image from "next/image";
import VideoCarousel from "./VideoCarousel";

interface Props {}

const Highlights: NextPage<Props> = ({}) => {
  useGSAP(() => {
    gsap.to("#title", {
      opacity: "1",
      y: 0,
    });

    gsap.to(".link", {
      opacity: "1",
      y: 0,
      duration: 1,
      stagger: 0.25,
    });
  });

  return (
    <section
      id="highlights"
      className="w-screen overflow-hidden bg-zinc init-padding"
    >
      <div className="screen-max-width">
        <div className="mb-12 lg:flex items-end justify-between">
          <h1 id="title" className="section-heading">
            Get the highlights
          </h1>
          <div className="flex flex-wrap items-end gap-5">
            <p className="link">
              Watch the film
              <Image
                className="ml-2"
                src={"/assets/images/watch.svg"}
                height={20}
                width={20}
                alt="watch"
              />
            </p>
            <p className="link">
              Watch the event
              <Image
                className="ml-2"
                src={"/assets/images/right.svg"}
                height={10}
                width={10}
                alt="right"
              />
            </p>
          </div>
        </div>

        {/* [Video] carousel */}
        <VideoCarousel />
      </div>
    </section>
  );
};

export default Highlights;
