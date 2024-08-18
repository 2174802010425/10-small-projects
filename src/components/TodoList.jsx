import React, { useContext, useState } from "react";
import TodoCard from "./TodoCard.jsx";
import { ContextValue } from "../hooks/Context.jsx";

export default function TodoList() {
  const { jobs } = useContext(ContextValue);

  return (
    <ul className="main">
      {jobs.length
        ? jobs.map((item, index) => (
            <TodoCard key={index} currentIndex={index}>
              <p>{item}</p>
            </TodoCard>
          ))
        : null}
    </ul>
  );
}
