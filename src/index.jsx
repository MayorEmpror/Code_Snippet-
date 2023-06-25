import React from "react";
import ReactDOM from "react-dom/client";
import Dashboard from "./components/webdashboard/Webdashboard";
// import App from "./components/App";
// import LoginPage from "./components/loginSystem/login";
// import YourSnippets from "./components/webdashboard/MainPanel/SideOptions/YourSnippets/YourSnippets";
// ReactDOM.createRoot(document.getElementById("root")).render(<YourSnippets/>)
//ReactDOM.createRoot(document.getElementById("root")).render(<LoginPage />);
//   ReactDOM.createRoot(document.getElementById("root")).render(<App/>);

class Device {
  static async readDeviceClipboard() {
    const clipboard = navigator.clipboard;
    const clipboardData = await clipboard.read();
    return clipboardData;
  }

  static identifyDevice() {
    const oRR = window.orientation;
    return oRR > 1 ? "Mobile" : "Desktop";
  }

  static identifyDeviceModrenized() {
    const oRR = window.screen.orientation;
    return oRR.angle > 0 ? "Mobile" : "Desktop";
  }

  static async getBatteryInformation() {
    const b = await navigator.getBattery();
    b.level *= 100;
    return b;
  }
}

ReactDOM.createRoot(document.getElementById("root")).render(
  Device.identifyDeviceModrenized() === "Desktop" ? (
    <Dashboard />
  ) : (
    <h1>Not supported by Mobile Devices</h1>
  )
);
//ReactDOM.createRoot(document.getElementById("root")).render(<Dashboard />);
