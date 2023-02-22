import React from "react";

export default function CapturingUserClicks() {
  const handleClick = () => {
    alert("button clicked");
  };
  return (
    <div>
      <button
        onClick={handleClick}
        className="px-5 py-2 bg-red-500 rounded-full text-white"
      >
        Click me
      </button>
    </div>
  );
}
