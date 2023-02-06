import React from "react";
import Content from "./topicContent.json";
import { useContext } from "react";
import { ClassContext } from "./Context";
function Theory() {
  const a = useContext(ClassContext);

  const { currTopic } = a;
  return (
    <div className="pt-16 px-20">
      <div>{Content[currTopic - 1].theoryUrl}</div>
    </div>
  );
}

export default Theory;
