import React, { useContext } from "react";
import { ContextValue } from "../hooks/Context";

export default function TodoCard({children, currentIndex}) {
  const {jobs,setJobs} = useContext(ContextValue);
  function handleUpdateJobs(currentData) {
    const updateJobs = jobs.filter((_, index) => index !== currentData)
    setJobs(updateJobs);
  }
  return (
    <li className="todoItem">
      {children}
      <div>
        <i className="fa-solid fa-trash-can" onClick={() => handleUpdateJobs(currentIndex)}></i>
        <i className="fa-solid fa-pen-to-square"></i>
      </div>
    </li>
  );
}
