// src/components/TodoItem.tsx
import React from "react";
import { Item } from "../model";

type Props = {
  // we should receive a todo item object
  item: Item;

  // and a function that we don't have to give
  //  anything, and doesn't return anything either
  //  (it "just does" something)
  toggleDone: () => void;

  // ..and maybe we'll add some more stuff later,
  //  this will be enough for now
};

export default function TodoItem(props: Props) {
  return (
    <p>
      <span onClick={props.toggleDone}>
        {" "}
        {props.item.isDone ? `[ X ]` : `[    ]`}{" "}
      </span>
      {props.item.isDone ? (
        <span style={{ fontSize: "24px", fontWeight: "bold" }}>
          {props.item.text}
        </span>
      ) : (
        <span style={{ fontSize: "16px", textDecorationLine: "line-through" }}>
          {props.item.text}
        </span>
      )}{" "}
      (
      {props.item.tags.map((tag) =>
        props.item.tags.indexOf(tag) < props.item.tags.length - 1
          ? tag + ", "
          : tag
      )}
      )
    </p>
  );
}
