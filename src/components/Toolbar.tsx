// src/components/Tololbar.tsx
import React from "react";

type Props = {
  tags: string[];
};

export default function Toolbar(props: Props) {
  const tags = props.tags;

  const uniqueTags = tags.filter(function (item, pos) {
    return tags.indexOf(item) === pos;
  });

  console.log("unique", uniqueTags);

  return (
    <p style={{ fontSize: "24px" }}>
      Filter by tag:{" "}
      {uniqueTags.map((tag) => (
        <button> {tag} </button>
      ))}
    </p>
  );
}
