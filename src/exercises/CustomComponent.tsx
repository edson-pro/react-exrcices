import React from "react";

export default function CustomComponent() {
  return (
    <div>
      {[1, 2, 3].map((e) => {
        return <Button id={e} />;
      })}
    </div>
  );
}

function Button({ id }) {
  return (
    <button
      className="px-5 mx-3 py-2 bg-red-500 rounded-full text-white"
      onClick={() => alert("button " + id)}
    >
      Button {id}
    </button>
  );
}
