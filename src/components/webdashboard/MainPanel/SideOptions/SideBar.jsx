import React from "react";
import "@coreui/coreui/dist/css/coreui.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FcServices } from "react-icons/fc";
import { FcPortraitMode } from "react-icons/fc";
import { AiOutlineScissor } from "react-icons/ai";
import { FcRating } from "react-icons/fc";
import { RiAccountPinCircleFill } from "react-icons/ri";
import { FcIdea } from "react-icons/fc";
import { CButton } from "@coreui/react";
import { COffcanvas } from "@coreui/react";
import { COffcanvasHeader } from "@coreui/react";
import { CCloseButton } from "@coreui/react";
import { GrDatabase } from "react-icons/gr";
const values = [
  {
    elem: <FcIdea className="h-1/3 w-1/3 " />,
    name: "Snippets",
  },
  {
    elem: <FcPortraitMode className="h-1/3 w-1/3 " />,
    name: "Profile",
  },
  {
    elem: <FcRating className="h-1/3 w-1/3 " />,
    name: "Favorites",
  },

  {
    elem: <RiAccountPinCircleFill className="h-1/3 w-1/3 " />,
    name: "Accounts",
  },
  {
    elem: <FcServices className="h-1/3 w-1/3 " />,
    name: "Settings",
  },
  {
    elem: <AiOutlineScissor className="h-1/3 w-1/3 " />,
    name: "AllSnippets",
  },
  {
    elem: <FcAbout className="h-1/3 w-1/3 " />,
    name: "Chats",
  },
];
import { Link } from "react-router-dom";
import { FcAbout } from "react-icons/fc";
const classes =
  " text-white backdrop-blur-xl  backdrop-grayscale rounded-lg  h-20 m-2 mb-6 opacity-75  overflow-hidden flex flex-col justify-center items-center transition ease-in duration-300 hover:bg-slate-100/30 p-2";

export default function SideBar(props) {
  const [visible, setVisible] = React.useState(false);
  const ClassCover = /*overflow hidden removed*/ ` w-${
    props.mobile ? "1/6" : "full"
  } h-screen bg-[url('../images/Photographs/forestRoad.jpg')] shadow-2xl  bg-contain flex flex-col   sepia

  `;
  const tabContainerStyle = " w-100% h-full  text-center text-justify-center "; //overflow hidden removed
  const h1 = "font-mono  text-center text-xl mt-2 "; //overflow hidden removed

  return (
    <>
      {props.mobile ? (
        <div
          className={ClassCover}
          style={{ display: props.mobile ? "flex" : "none" }}
        >
          <div className={tabContainerStyle}>
            <h1 className={h1}>Data</h1>

            <button className="container mt-10 font-serif">
              {values.map((v, k) => (
                <Link
                  to={"/" + v.name}
                  key={"Sidetab-" + k}
                  style={{
                    color: "transparent",
                    textDecoration: "none",
                  }}
                >
                  <div
                    className={classes}
                    style={{ color: "white", borderBottom: "none" }}
                  >
                    {v.elem}
                    {v.name}
                  </div>
                </Link>
              ))}
            </button>
          </div>
        </div>
      ) : (
        <>
          <CButton
            onClick={() => setVisible(true)}
            style={{
              width: "10vh",
              height: "7vh",
              backgroundImage: "linear-gradient(to right,red ,yellow,red)",
              backdropFilter: "blur(4px)",
              opacity: ".25",
              borderStyle: "solid",
              borderColor: "pink",
              marginLeft: "1vh",
              marginTop: "1vh",
            }}
          >
            <GrDatabase
              style={{
                width: "75%",
                height: " 75%",
                margin: "auto",
              }}
            />
          </CButton>
          <COffcanvas
            backdrop={false}
            placement="start"
            scroll={true}
            visible={visible}
            onHide={() => setVisible(false)}
            style={{
              backgroundColor: "transparent",
              backdropFilter: "blur(4px)",
              overflow: "scroll",
            }}
          >
            <COffcanvasHeader style={{ background: "white", opacity: "0.15" }}>
              {/* <COffcanvasTitle>Offcanvas with body scrolling</COffcanvasTitle> */}
              <CCloseButton
                className="text-reset backdrop-invert"
                onClick={() => setVisible(false)}
                style={{
                  marginLeft: "auto",
                  backgroundColor: "red",
                  backdropFilter: "invert(0)",
                  opacity: "1",
                  filter: "invert",
                }}
              />
            </COffcanvasHeader>

            <div className={ClassCover}>
              <div className={tabContainerStyle}>
                <h1 className={h1}>Data</h1>

                <button className="container mt-10 font-serif">
                  {values.map((v, k) => (
                    <Link
                      to={"/" + v.name}
                      key={"Sidetab-" + k}
                      style={{
                        color: "transparent",
                        textDecoration: "none",
                      }}
                    >
                      <div className={classes}>
                        {v.elem}
                        {v.name}
                      </div>
                    </Link>
                  ))}
                </button>
              </div>
            </div>
          </COffcanvas>
        </>
      )}
    </>
  );
}
