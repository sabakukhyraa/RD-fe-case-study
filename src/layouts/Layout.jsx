import React from "react";
import TheSidebar from "../components/TheSidebar";

export default function Layout({ pageComponent }) {
  return (
    <div className="w-full flex bg-secondary overflow-hidden">
      <TheSidebar />
      <div className="w-full">{pageComponent}</div>
    </div>
  );
}
