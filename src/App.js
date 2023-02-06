import "./App.css";
import { useState, useRef } from "react";
import { ClassContext } from "./Context";
import Topics from "./topics";
import Navbar from "./Navbar";
import TabBar from "./tabBar";
export const MyClass = (props) => {
  const [currClass, setCurrClass] = useState(1);
  const [currTopic, setCurrTopic] = useState(1);
  const [currSubject, setCurrSubject] = useState("English");
  const [showSubjects, setShowSubjects] = useState(false);
  const [showClasses, setShowClasses] = useState(false);
  const [currSubId, setCurrSubId] = useState(1);
  const targetClass = useRef(null);
  const targetSearch = useRef(null);
  const targetSubject = useRef(null);

  return (
    <ClassContext.Provider
      value={{
        currClass,
        setCurrClass,
        currSubId,
        setCurrSubId,
        currSubject,
        setCurrSubject,
        showClasses,
        setShowClasses,
        targetClass,
        targetSubject,
        showSubjects,
        setShowSubjects,
        targetSearch,
        currTopic,
        setCurrTopic,
      }}
    >
      {props.children}
    </ClassContext.Provider>
  );
};
function App() {
  return (
    <div className="App flex ">
      <Navbar />
      <div className="flex w-screen">
        <div className="topic__panel block w-1/4">
          <Topics />
        </div>
        <div className=" block w-3/4">
          <TabBar />
        </div>
      </div>
    </div>
  );
}

export default App;
