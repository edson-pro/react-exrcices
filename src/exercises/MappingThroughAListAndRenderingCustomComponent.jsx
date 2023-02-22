import React from "react";

const animals = [
  {
    name: "dog",
    icon: "🐶",
  },
  {
    name: "cat",
    icon: "🐱",
  },
  {
    name: "chicken",
    icon: "🐔",
  },
  {
    name: "cow",
    icon: "🐮",
  },
  {
    name: "sheep",
    icon: "🛌",
  },
  {
    name: "horse",
    icon: "🏇",
  },
];
export default function MappingThroughAListAndRenderingCustomComponent() {
  return (
    <div>
      {animals.map((e) => {
        return <Item icon={e.icon} title={e.name} />;
      })}
    </div>
  );
}

function Item({ icon, title }) {
  return (
    <div className="px-4 border border-gray-200 py-3">
      {icon} {title}
    </div>
  );
}
