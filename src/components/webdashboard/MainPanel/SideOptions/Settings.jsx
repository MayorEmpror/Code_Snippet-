import React from "react";
const className = "w-1/4 h-1/4 absolute";
import { GiMountaintop } from "react-icons/gi";
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
export default function Settings() {
  return (
    <div
      className="flex h-screen  w-full
  translate-x-0 items-center justify-center bg-slate-700"
    >
      {icons}
    </div>
  );
}
