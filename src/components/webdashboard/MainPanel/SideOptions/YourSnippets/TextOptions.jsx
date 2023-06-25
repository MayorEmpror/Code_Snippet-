/* eslint-disable react/jsx-key */
import React from "react";
import { AiFillStar } from "react-icons/ai";
//import Favorites from "../Favorites";
import { GrNewWindow } from "react-icons/gr";
import { FaSave } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import { ImBin2 } from "react-icons/im";
export default function TextOptions(props) {
  // eslint-disable-next-line no-unused-vars
  const [PropArgs, SetArgs] = React.useState(props);
  const [Star, Set] = React.useState(true);
  const navStyles =
    "h-full backdrop-blur-sm bg-blue-500/30  backdrop-contrast-125 flex flex-row ";
  const colors = [
    " hover:bg-blue-100/30 col-span-1 row-span-2 text-white",
    " hover:bg-blue-100/30 col-span-1 row-span-2 text-white ",
    " hover:bg-blue-100/30 col-span-1 row-span-2 w-3/2 text-white",
    " hover:bg-blue-100/30 col-span-1 row-span-2 relative  text-white",
  ];
  // eslint-disable-next-line react/jsx-key
  const icons = [
    <GrNewWindow id="new" className="mt-1 h-1/3 w-1/3 invert" />,
    <ImBin2 id="delete" className=" mt-1 h-1/2 w-1/2" />,
    Star ? (
      <AiOutlineStar id="favourites" className=" mt-1 h-1/2 w-1/2 " />
    ) : (
      <AiFillStar id="delete" className=" mt-1 h-1/2 w-1/2" />
    ),
    <FaSave className=" mt-1 h-1/2 w-1/2" />,
  ];
  //  console.log(PropArgs.t)
  const funct = () => {
    Star ? PropArgs.Favorites() : PropArgs.removeFromfAV();
    Set((preVal) => !preVal);
  };
  const Functions = [PropArgs.New, PropArgs.Delete, funct, PropArgs.Save];
  //const text = ["new", "delete", "fav", "save"];
  const Button =
    "flex flex-col justify-center items-center transition ease-in duration-200 hover:bg-slate-100/30"; //" backdrop-contrast-125 backdrop-brightness-200 rounded-sm h-full mt-1 ml-1 w-full text-white font-serif";
  const Buttons = colors.map((x, key) => {
    return (
      <button className={Button + `${x}`} key={key} onClick={Functions[key]}>
        {/* {text[key]} */}
        {icons[key]}
      </button>
    );
  });
  return (
    <div
      className=" h-20  bg-[url('../images/Photographs/forestRoad.jpg')] sepia

    "
    >
      <nav className={navStyles}>
        <div
          id="grid-cover"
          className="grid w-1/3 grid-cols-4 grid-rows-2  gap-y-4"
        >
          {Buttons}
        </div>
        <div
          id="profilePic"
          className=" h-20 bg-[url('../images/Photographs/Profile.jpg')] bg-cover"
          style={{
            backgroundRepeat: "no-repeat",
            border: "1px solid black",
            height: "6vh",
            width: "6vh",
            right: "1vh",
            position: "absolute",
            borderRadius: " 50%",
            display: " inline-block",
            top: "1vh",
          }}
        ></div>
        {/* <label htmlFor="button">this  <input type="button" onClick={console.log("clicked")}/ > */}
        {/* </label> */}
      </nav>
    </div>
  );
}
