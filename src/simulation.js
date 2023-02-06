import React from "react";
import Content from "./topicContent.json";
import { useContext } from "react";
import { ClassContext } from "./Context";
function Simulation() {
  const a = useContext(ClassContext);

  const { currTopic } = a;
  return (
    <div className="pt-16 px-20">
      <div>
        {Content[currTopic - 1].simulations.map((item) => {
          return <div>{item.simulation}</div>;
        })}
      </div>
    </div>
  );
}

export default Simulation;
