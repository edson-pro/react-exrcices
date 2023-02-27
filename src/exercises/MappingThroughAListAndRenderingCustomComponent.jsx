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
    <ul>
      {animals.map((item) => {
        return <Item icon={item.icon} title={e.name} />;
      })}
    </ul>
  );
}

function Item({ icon, title }) {
  return (
    <li className="px-4 border border-gray-200 py-3">
      {icon} {title}
    </li>
  );
}
