import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="gap-8 z-50 flex font-medium w-full fixed items-center bg-gray-200 border-b border-gray-200 flex-wrap p-4 capitalize">
      {[
        { title: "hello world", path: "/" },
        { title: "capture user clicks", path: "/capture-user-clicks" },
        { title: "custom component", path: "/custom-component" },
        { title: "building form", path: "/building-form" },
        { title: "state and props", path: "/state-and-props" },
        {
          title: "mapping through list and rendering",
          path: "/mapping-through-list-and-rendering",
        },
        {
          title: "mapping through list and rendering component",
          path: "/mapping-through-list-and-rendering-component",
        },
        { title: "rendering json", path: "/rendering-json" },
        { title: "working with api", path: "/working-with-api" },
        { title: "Todo", path: "/todo" },
        { title: "calculator", path: "/calculator" },
      ].map((e) => {
        return <Link to={e.path}>{e.title}</Link>;
      })}
    </nav>
  );
}
