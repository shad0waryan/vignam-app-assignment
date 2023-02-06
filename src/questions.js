import React from "react";
import Content from "./topicContent.json";
import { useContext } from "react";
import { ClassContext } from "./Context";
function Questions() {
  const a = useContext(ClassContext);

  const { currTopic } = a;

  const checkAns = (choice, answer) => {
    if (choice === answer) {
      alert("Correct!!");
    } else {
      alert("Incorrect");
    }
  };
  return (
    <div className="pt-16 px-20 flex flex-col">
      {Content[currTopic - 1].questions.map((item) => {
        return (
          <div className="m-2">
            <p className="text-s5 font-semibold">
              Q{item.serial}- {item.prompt}
            </p>
            <button
              onClick={() => checkAns("A", item.answer)}
              className="w-4/6 m-1  text-start bg-cream hover:bg-hoverblue pl-3 py-4 text-s3 rounded-md"
            >
              {"A)"} {item.optionA}
            </button>
            <button
              onClick={() => {
                checkAns("B", item.answer);
              }}
              className="w-4/6 m-1 text-start bg-cream hover:bg-hoverblue pl-3 py-4 text-s3 rounded-md"
            >
              {"B)"} {item.optionB}
            </button>
            <button
              onClick={() => checkAns("C", item.answer)}
              className="w-4/6 m-1 text-start bg-cream hover:bg-hoverblue pl-3 py-4 text-s3 rounded-md"
            >
              {"C)"} {item.optionC}
            </button>
            <button
              onClick={() => checkAns("D", item.answer)}
              className="w-4/6 m-1 text-start bg-cream hover:bg-hoverblue pl-3 py-4 text-s3 rounded-md"
            >
              {"D)"} {item.optionD}
            </button>
          </div>
        );
      })}
    </div>
  );
}

export default Questions;
