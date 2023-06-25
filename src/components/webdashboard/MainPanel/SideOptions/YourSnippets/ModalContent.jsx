import React, { useRef } from "react";
import { RxCross2 } from "react-icons/rx";

export default function ModalContent(props) {
  // eslint-disable-next-line no-unused-vars
  const [Files, SetFiles] = React.useState(
    localStorage.getItem("Files")
      ? localStorage.getItem("Files").split(",")
      : []
  );
  const values = [];
  for (let i = 0; i <= Files.length - 1; i++) {
    values[i] = false;
  }

  const file_Style = `  w-20 h-20 relative mt-1 ml-3 bg-cover bg-no-repeat  bg-[url('../images/Photographs/Vista.jpg')]  rounded-lg  `;
  const Modal_button_Styles = "rounded-full bg-slate-600 w-4 h-4 ml-1  mt-1";
  const Modal_Styles =
    "flex flex-row justify-center items-center w-full h-full z-1 absolute";
  const Modal_glass_Back =
    "border border-solid border-slate-500 rounded bg-transparent w-3/4 h-3/4 z-2 absolute backdrop-blur-xl";
  const File_Show_Case =
    "flex flex-col bg-zinc-900 w-5/6 ml-auto h-full text-white";
  const Apple_UI_buttons_span =
    "flex flex-row  bg-zinc-700/50 backdrop-blur-xl h-14";
  const close_Button = "rounded-full bg-red-700 w-4 h-4 ml-1 mt-1";
  const cLOSE_lOGO =
    "text-transparent transition duration-75 ease-out hover:ease-in hover:text-black";
  const Work_area =
    "w-full h-full text-white  grid grid-cols-7 grid-rows-5 place-items-center";
  const bottom_buttons_area = "h-12 flex flex-row";
  const New_File_Button = "bg-zinc-600 mr-auto w-24 h-6 mt-1 rounded ml-1";
  const Cancle_Button = "bg-zinc-600 ml-1 mr-1 w-24 h-6 mt-1 rounded";
  const Open_Button =
    "bg-zinc-600 ml-1 w-24 mr-1 h-6 mt-1 rounded transition duration-75 ease-out hover:ease-in hover:bg-gradient-to-b from-pink-400 to-purple-500";
  const blur_curtain =
    " w-full h-full absolute   justify-center items-center backdrop-blur-sm bg-black/20";
  const elements = useRef(new Array());

  const files = Files.map((x, k) => {
    return (
      <button
        id={x}
        ref={(e) => elements.current.push(e)}
        key={k}
        onClick={() => {
          void (elements.current[k].classList.contains("bg-slate-500")
            ? elements.current[k].classList.remove("bg-slate-500")
            : elements.current.every(
                (v) => !v.classList.contains("bg-slate-500")
              )
            ? elements.current[k].classList.add("bg-slate-500")
            : (function () {
                elements.current.forEach((element) => {
                  element.classList.remove("bg-slate-500");
                });
                elements.current[k].classList.add("bg-slate-500");
              })());
        }}
      >
        <div className={file_Style}></div>
        <div className="mt-auto">{"file" + k}</div>
      </button>
    );
  });
  function NewFile() {
    props.NewFile();
    props.cross();
  }

  return (
    <div className={Modal_Styles}>
      <div className={Modal_glass_Back} style={{ marginTop: "-13rem" }}>
        <div className={File_Show_Case}>
          <span className={Apple_UI_buttons_span}>
            <button className={close_Button} onClick={props.cross}>
              {" "}
              <RxCross2 className={cLOSE_lOGO} />
            </button>
            <div className={Modal_button_Styles}></div>
            <div className={Modal_button_Styles}></div>
          </span>
          <div className={Work_area}>{files}</div>
          <hr />
          <div className={bottom_buttons_area}>
            <button className={New_File_Button} onClick={NewFile}>
              New File
            </button>
            <button className={Cancle_Button} onClick={props.cross}>
              Cancel
            </button>
            <button
              className={Open_Button}
              onClick={() => {
                props.Get_Selected_File_Data();
              }}
            >
              Open
            </button>
          </div>
        </div>
      </div>
      <div className={blur_curtain}></div>
    </div>
  );
}
