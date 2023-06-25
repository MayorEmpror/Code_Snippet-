import React from "react";
import CodeMirror from "@uiw/react-codemirror";
import { langs } from "@uiw/codemirror-extensions-langs";
const { javascript } = langs;
export default function Favorites(props) {
  // eslint-disable-next-line no-unused-vars
  const [data, SetData] = React.useState(
    localStorage.getItem("SNIP") ? localStorage.getItem("SNIP").split(",") : []
  );
  // eslint-disable-next-line no-unused-vars
  function AddToFavorites() {
    const numberOflinesArray = localStorage.getItem("SNIP").split("\n");
    const numberOflines = numberOflinesArray.length;

    const currentDate = new Date();

    const content = data.map((x, k) => {
      return (
        <div key={k} className="m-2">
          <div className="flex flex-row">
            <div
              id="profilePic"
              className=" h-20 bg-[url('../images/Photographs/Profile.jpg')] bg-cover"
              style={{
                backgroundRepeat: "no-repeat",
                border: "1px solid black",
                height: "6vh",
                width: "6vh",
                borderRadius: " 50%",
              }}
            ></div>
            <p>{`${
              currentDate.getDay() +
              "|" +
              currentDate.getHours() +
              ":" +
              currentDate.getMinutes()
            }`}</p>
          </div>

          <hr />
          <CodeMirror
            value={x.replaceAll("∑", ",")}
            width="95%"
            height={`15 +${numberOflines}%`} //"15%"
            theme="dark"
            extensions={[javascript({ jsx: true })]}
            //all of the new values a set in local storage but thefavorites array is only created when the favorites function runs
          />
        </div>
      );
    });
    return content;
  }
  const content = data.length === 0 ? "No Favourites" : AddToFavorites();
  return (
    //coming soon       Favorites |comming soon
    <div
      className={`bg-slate-100 w-${
        props.mobile ? "full" : "full"
      }  grid  h-screen grid-cols-1 flex-col overflow-scroll grid-rows-${
        data.length
      } gap-x-2 `}
    >
      {content}
    </div>
  );
}
