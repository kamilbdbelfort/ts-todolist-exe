// src/components/TodoList.tsx
import React, { useState } from "react";

import { Item } from "../model"; // we need to import the type
import TodoItem from "../components/TodoItem";
import Toolbar from "./Toolbar";

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

  return (
    <p>
      <Toolbar tags={combinedTags} />
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
