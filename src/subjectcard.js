import React from "react";
import { useContext } from "react";
import { ClassContext } from "./Context";
function SubjectCard({ subject }) {
  const a = useContext(ClassContext);

  const { setCurrSubject } = a;

  return (
    <div className="flex flex-col ">
      <button onClick={() => setCurrSubject(subject)}>{subject}</button>
    </div>
  );
}

export default SubjectCard;
