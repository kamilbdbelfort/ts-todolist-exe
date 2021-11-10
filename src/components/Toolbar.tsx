// src/components/Tololbar.tsx
import React, { useState } from "react";

type Props = {
  tags: string[];
};

export default function Toolbar(props: Props) {
  const tags = props.tags;
  const [requiredTags, setRequiredTags] = useState<string[]>([]);

  const uniqueTags = tags.filter(function (item, pos) {
    return tags.indexOf(item) === pos;
  });

  const changeStyle = (e: any) => {
    if (e !== null) {
      e.target.style.fontWeight =
        e.target.style.fontWeight === "bold" ? "" : "bold";
      if (requiredTags === null) {
        return setRequiredTags(e.target.value);
      } else if (requiredTags !== null) {
        const newRequiredTags = requiredTags.filter(
          (tag) => tag !== e.target.value
        );
        if (newRequiredTags.length === requiredTags.length) {
          newRequiredTags.push(e.target.value);
        }
        return setRequiredTags(newRequiredTags);
      }
    }
  };

  console.log("req tags", requiredTags);

  return (
    <p style={{ fontSize: "24px" }}>
      Filter by tag:{" "}
      {uniqueTags.map((tag, index) => (
        <button id={tag} value={tag} key={index} onClick={changeStyle}>
          {" "}
          {tag}{" "}
        </button>
      ))}
    </p>
  );
}
