import React from "react";
import "../../../images/Photographs/spacePlanets.jpg";
import { GiMountaintop } from "react-icons/gi";
const anchorStyles =
  "underline decoration-sky-600 hover:decoration-blue-400   transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 duration-300";
const counter = ["About us", " Pricing", "Company", "About us", "login→"];
export default function Navbar() {
  const anchors = counter.map((x, k) => {
    return (
      <a href=" #" key={k} className={anchorStyles}>
        {x}
      </a>
    );
  });
  return (
    <>
      <nav
        className=" 
      max-w-8xl 
      lg:px-0.1 mx-auto
       flex 
       items-center 
       justify-between 
       bg-[url('../images/Photographs/spacePlanets.jpg')]
       p-6
       text-white
        "
      >
        <a
          href="# "
          className="
          underline decoration-sky-600 transition delay-150 duration-300 ease-in-out  hover:-translate-y-1 hover:scale-110 hover:decoration-blue-400 hover:blur-lg"
        >
          <GiMountaintop className="h-8 w-8" />
        </a>
        {anchors}
      </nav>
    </>
  );
}
