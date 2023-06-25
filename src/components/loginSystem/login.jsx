import React from "react";
import dynamicNetwork from "../../../images/Photographs/spacePlanets.jpg";
import { GiMountaintop } from "react-icons/gi";
//import {VitriualReality} from "../../images/Photographs/A virtual realityins.jpg.jpg"

const url = {
  image1: dynamicNetwork,
  //  image2  : VitriualReality,
};
console.log(url.image1);
export default function LoginPage() {
  return (
    <>
      <div
        id="login"
        className="
      flex
      h-screen
      items-center
    
     justify-center
    bg-[url('../images/Photographs/spacePlanets.jpg')] bg-cover bg-no-repeat
    "
      >
        <div
          className=" 
      ml-19 w-2/3 border 
      border-transparent border-y-zinc-200
       p-10      
       shadow-2xl backdrop-blur-xl sm:h-2/3
       sm:w-1/3 
          "
        >
          {/* code needed*/}
          <label htmlFor="email" className="font-arial text-white">
            Enter email
          </label>
          <input
            type="text"
            className="h-9  w-full rounded-full outline-none"
          />
          <label htmlFor="password" className="font-arial text-white">
            Enter password
          </label>
          <input
            type="text"
            className="h-9  w-full rounded-full outline-none"
          />
          <label htmlFor="userName" className="font-arial text-white">
            Enter userName
          </label>
          <input
            type="text"
            className="h-9  w-full rounded-full outline-none"
          />
          <input
            type="checkbox"
            className="ml-4 mt-8 h-4 w-4 rounded-full border-gray-300 bg-gray-100 text-zinc-600 focus:ring-2 focus:ring-zinc-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-zinc-600"
          />{" "}
          Choose newsletter
        </div>
        <div className="ml-20 flex h-screen w-2/3  items-center justify-center p-10 font-serif sm:h-2/3 sm:w-1/3">
          <GiMountaintop className="h-1/3 w-1/3 invert" />
          <h1 className="text-xl invert">Acme</h1>
        </div>
      </div>
    </>
  );
}
//style={{backgroundImage : `url(${dynamicNetwork})`}}
