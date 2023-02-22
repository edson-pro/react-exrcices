import React, { useState } from "react";

export default function StateAndProps() {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h4>Button has been clicked: {count}</h4>
      <button
        onClick={() => setcount(count + 1)}
        className="px-5 py-2 bg-red-500 rounded-full text-white"
      >
        Click Me
      </button>
    </div>
  );
}
