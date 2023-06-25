import React, { useState } from "react";
import TextOptions from "./TextOptions";
const className = "w-1/4 h-1/4 absolute";
import { GiMountaintop } from "react-icons/gi";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
import ModalContent from "./ModalContent";

import Modal from "./Modal";
const { javascript } = langs;
const classStyles = [
  { position: "translateX(0px)", color: "rgb(100 116 139)" },
  { position: "translateX(0.25rem)", color: "rgb(148 163 184)" },
  { position: "translateX(0.5rem)", color: "rgb(203 213 225)" },
  { position: "translateX(0.75rem)", color: "rgb(226 232 240)" },
];

const icons = classStyles.map((x, k) => {
  return (
    <GiMountaintop
      style={{
        color: x.color,
        transform: x.position,
      }}
      className={className}
      key={k}
    />
  );
});

export default function YourSnippets() {
  const [ShowModal, SetShowModal] = React.useState(false);
  const [localSetup, SetLoclaSetup] = React.useState(
    localStorage.getItem("Files")
      ? localStorage.getItem("Files").split(",")
      : []
  );
  const [CodeMirrorData, setCodeMirrorData] = useState(
    localStorage.getItem("Autosave_snippet")?.replaceAll("∑", ",") ||
      `console.log("My first snippet!")`
  );

  var t = false;
  function AddToFav() {
    t = !t;
    const rInitialArrayLocalStorage = localStorage.getItem("SNIP") || [];
    const pInitialArrayLocalStorage = !Array.isArray(rInitialArrayLocalStorage)
      ? rInitialArrayLocalStorage.split(",")
      : [];

    localStorage.setItem(
      "SNIP",
      String([
        ...pInitialArrayLocalStorage,
        localStorage.getItem("Autosave_snippet"),
      ])
    );
  }
  function RemoveFromFav() {
    localStorage.removeItem("SNIP");
  }

  function remover() {
    localStorage.removeItem("Autosave_snippet");
  }
  function Save() {
    const rInitialArrayLocalStorage = localStorage.getItem("Files") || [];
    const pInitialArrayLocalStorage = !Array.isArray(rInitialArrayLocalStorage)
      ? rInitialArrayLocalStorage.split(",")
      : [];
    localStorage.setItem(
      "Files",
      String([
        ...pInitialArrayLocalStorage,
        localStorage.getItem("Autosave_snippet"),
      ])
    );
  } //new function saves the new file to the localstorage
  function New() {
    SetShowModal(true);
  }
  function NewFile() {
    localStorage.removeItem("Autosave_snippet");
    SetLoclaSetup(`console.log("My first snippet!")`);
    setCodeMirrorData(`console.log("My first snippet!")`);
  }
  function Delete() {
    remover();
    SetLoclaSetup([]);
  }
  function cross() {
    SetShowModal(false);
  }
  function Get_Selected_File_Data() {
    const Selected_File_Data =
      document.querySelector(".bg-slate-500").attributes[0].value;
    setCodeMirrorData(Selected_File_Data);
    localStorage.setItem("Autosave_snippet",Selected_File_Data)
    SetShowModal(false);
    //Set__Data(Selected_File_Data)// initaillize
  }
  //function Set_Selected_File_Data(){} //initialize

  return (
    <>
      {ShowModal ? (
        <Modal>
          <ModalContent
            cross={cross}
            NewFile={NewFile}
            Get_Selected_File_Data={Get_Selected_File_Data}
          />
        </Modal>
      ) : null}
      <div
        className={`flex h-screen  w-full flex-col overflow-hidden bg-slate-100`}
      >
        <TextOptions
          Favorites={AddToFav}
          Save={Save}
          New={New}
          Delete={Delete}
          t={t}
          removeFromfAV={RemoveFromFav}
        />
        {localSetup.length === 0 ? (
          <div className="flex h-screen w-full translate-x-0 items-center justify-center bg-slate-100">
            {icons}
            <div></div>
          </div>
        ) : (
          <CodeMirror
            value={CodeMirrorData}
            height="94vh"
            theme="dark"
            extensions={[javascript({ jsx: true })]}
            onChange={(v) => {
              setCodeMirrorData(() => {
                localStorage.setItem(
                  "Autosave_snippet",
                  v.replaceAll(",", "∑")
                );
                // return v; //.replaceAll("," , "∑")
              });
            }}
          />
        )}
      </div>
    </>
 
  );
}
//add btn new and delete functionality and then route to show the icons when delete pressed
