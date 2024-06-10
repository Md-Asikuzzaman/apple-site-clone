"use client";

import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { navLists } from "@/const";

interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex justify-between items-center">
      <nav className="flex w-full screen-max-width">
        <Image
          src={"/assets/images/apple.svg"}
          height={18}
          width={18}
          alt="logo"
        />

        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((link) => (
            <Link
              key={link}
              href={"/"}
              className="text-sm text-gray hover:text-white transition-all"
            >
              <div className="px-5">{link}</div>
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-6 max-sm:justify-end max-sm:flex-1">
          <Image
            src={"/assets/images/search.svg"}
            height={18}
            width={18}
            alt="search"
          />
          <Image
            src={"/assets/images/bag.svg"}
            height={18}
            width={18}
            alt="search"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
