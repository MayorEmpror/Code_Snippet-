import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PanelController from "./PanelController";
import YourSnippets from "./MainPanel/SideOptions/YourSnippets/Snippets";
import Settings from "./MainPanel/SideOptions/Settings";
import Profile from "./MainPanel/SideOptions/Profile";
import Chats from "./MainPanel/SideOptions/Chats";
import AllSnippets from "./MainPanel/SideOptions/AllSnippets";
import Favorites from "./MainPanel/SideOptions/Favorites";
import Accounts from "./MainPanel/SideOptions/Account";
import LandingPage from "./MainPanel/SideOptions/LandingPage";

export default function Dashboard() {
  var init = window.innerWidth >= 900 ? true : false;
  const [mobile, setMobile] = React.useState(init);
  // eslint-disable-next-line no-unused-vars
  const [fav, setfav] = React.useState(false);

  window.addEventListener("resize", () => {
    setMobile((preVal) => {
      preVal = window.innerWidth >= 900 ? true : false;
      return preVal;
    });
  });
  const RoutingData = [
    { path: "/", element: <LandingPage mobile={mobile} /> },

    {
      path: "/Snippets",
      element: <YourSnippets mobile={mobile} Favorites={fav} />,
    },
    { path: "/Accounts", element: <Accounts mobile={mobile} /> },
    { path: "/Settings", element: <Settings mobile={mobile} /> },
    { path: "/Profile", element: <Profile mobile={mobile} /> },
    { path: "/Chats", element: <Chats mobile={mobile} /> },
    {
      path: "/AllSnippets",
      element: <AllSnippets mobile={mobile} Favorites={fav} />,
    },
    {
      path: "/Favorites",
      element: <Favorites mobile={mobile} Favorites={fav} />,
    },
  ];

  const RouterDataContent = RoutingData.map((elem, key) => {
    return (
      <Route
        path={elem.path}
        element={
          <PanelController mobile={mobile}>{elem.element}</PanelController>
        }
        key={key}
      />
    );
  });
  return (
    <div className="flex">
      <BrowserRouter>
        <Routes>{RouterDataContent}</Routes>
      </BrowserRouter>
    </div>
  );
}
