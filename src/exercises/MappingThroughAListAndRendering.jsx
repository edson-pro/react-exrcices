import React from "react";

export default function MappingThroughAListAndRendering() {
  return (
    <div>
      <ol className="list-disc flex flex-col gap-3">
        {["dog", "cat", "chicken", "cow", "sheep", "horse"].map((e) => (
          <li>{e}</li>
        ))}
      </ol>
    </div>
  );
}
