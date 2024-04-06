"use client";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsSearch } from "react-icons/bs";
import Link from "next/link";

function Navbar() {
  const data = [
    {
      id: 1,
      name: "HOME",
    },
    {
      id: 2,
      name: "ABOUT",
    },
    {
      id: 3,
      name: "SERVICE",
    },
    {
      id: 4,
      name: "PORTFOLIO",
    },
  ];
  const [open, setOpen] = useState(false);
  const toggle = () => {
    setOpen(!open);
  };

  const [bar, setBar] = useState(false);
  const barToggle = () => {
    setBar(!bar);
  };

  return (
    <div className="flex items-center justify-between border-b-[2px] border-black bg-main  p-5 px-11 max-sm:gap-2 max-sm:px-5">
      <div className="relative" onClick={toggle}>
        <RxHamburgerMenu size={40} />
        {open && (
          <div className="absolute flex w-[80vw] flex-col gap-10 bg-menu p-5 text-start text-white">
            {data.map((item, index) => {
              return (
                <Link
                  href="#"
                  key={index}
                  className="max-w-max text-5xl underline transition-transform duration-200 hover:-translate-y-2 max-md:text-3xl"
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </div>
      <div className="text-3xl">LENSCAPE.</div>
      <div className="max-sm:hidden ">
        <BsSearch
          size={35}
          width={30}
          className="relative"
          onClick={barToggle}
        />
        {bar && (
          <div className="absolute right-20   top-5 max-md:right-2 max-md:top-[90px] ">
            <input
              type="text"
              placeholder="Search"
              className="rounded-md border-none bg-menu p-2 outline-none "
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
