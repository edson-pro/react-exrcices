import React from "react";

export default function MappingThroughAListAndRendering() {
  return (
    <div>
      <ul className="list-disc flex flex-col gap-3">
        {["dog", "cat", "chicken", "cow", "sheep", "horse"].map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
}
