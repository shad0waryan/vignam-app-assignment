import React from "react";
import Myclasses from "./classes.json";
import ClassCard from "./classCard";
function Class() {
  return (
    <div>
      {Myclasses.map((item) => {
        return (
          <ClassCard
            classProp={item.class}
            subjectsProp={item.subjects}
            subjectId={item.subjects.id}
          />
        );
      })}
    </div>
  );
}

export default Class;
