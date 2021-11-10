// src/components/TodoList.tsx
import React, { useState } from "react";

import { Item } from "../model"; // we need to import the type
import TodoItem from "../components/TodoItem";

export default function TodoList() {
  // note the <Item[]> syntax!
  const [list, setList] = useState<Item[]>([
    {
      id: 0,
      text: "Make this app",
      tags: ["react", "typescript"],
      isDone: false,
    },
    {
      id: 1,
      text: "Fall in love with TypeScript",
      tags: ["romantic", "typescript"],
      isDone: false,
    },
  ]);
  const [requiredTags, setRequiredTags] = useState<string[]>([]);

  const toggle = (id: number) => {
    // TODO implement. Tip: use map
    setList(
      list.map((item) =>
        item.id === id ? { ...item, isDone: !item.isDone } : item
      )
    );
  };

  const combinedTags: string[] = [];
  for (let x = 0; x < list.length; x++) {
    for (let y = 0; y < list[x].tags.length; y++) {
      combinedTags.push(list[x].tags[y]);
    }
  }

  const selectedTags = combinedTags;

  const uniqueTags = selectedTags.filter(function (item, pos) {
    return selectedTags.indexOf(item) === pos;
  });

  const newList = () => {
    let selectedList = [];
    for (let x = 0; x < list.length; x++) {
      return (selectedList = list[x].tags.filter((tag) =>
        requiredTags.includes(tag)
      ));
    }
  };

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

  newList();

  return (
    <p>
      <p style={{ fontSize: "24px" }}>
        Filter by tag:{" "}
        {uniqueTags.map((tag, index) => (
          <button id={tag} value={tag} key={index} onClick={changeStyle}>
            {" "}
            {tag}{" "}
          </button>
        ))}
      </p>
      {list.map((item) => {
        return (
          <TodoItem
            key={item.id}
            item={item}
            toggleDone={() => toggle(item.id)}
          />
        );
      })}
    </p>
  );
}
