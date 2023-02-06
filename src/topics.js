import React from "react";
import "./topics.css";
import { useContext } from "react";
import { ClassContext } from "./Context";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Myclasses from "./classes.json";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";

function Topics() {
  const b = useContext(ClassContext);
  const { currClass, currSubject, setCurrTopic } = b;

  return (
    <div className=" topics -2  bg-bkground border-t-blackforborder h-screen pt-2">
      {Myclasses[currClass - 1].subjects.map((item) => {
        return (
          <div>
            {item.subject === currSubject && (
              <div>
                {item.chapters.map((chp) => {
                  return (
                    <div>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                          className="hover:bg-hoverblue p-2"
                        >
                          <div className=" pl-1 flex items-center">
                            <div className=" bg-hoverblue rounded ">
                              <LibraryBooksIcon style={{ color: "#228be6" }} />
                            </div>
                            {chp.chapter}
                          </div>
                        </AccordionSummary>
                        <AccordionDetails className="p-0">
                          <div
                            onClick={() => setCurrTopic("1")}
                            className=" font-medium text-topicgrey ml-4 hover:bg-hoverdarkblue pt-2 pb-2 pl-2 pr-2 hover:cursor-pointer border-l border-darkblue hover:text-white"
                          >
                            <button>Topic 1</button>
                          </div>
                          <div
                            onClick={() => setCurrTopic("2")}
                            className=" font-medium text-topicgrey ml-4 hover:bg-hoverdarkblue pt-2 pb-2 pl-2 pr-2 hover:cursor-pointer border-l border-darkblue hover:text-white"
                          >
                            <p>Topic 2</p>
                          </div>
                          <div
                            onClick={() => setCurrTopic("3")}
                            className=" font-medium text-topicgrey ml-4 hover:bg-hoverdarkblue pt-2 pb-2 pl-2 pr-2 hover:cursor-pointer border-l border-darkblue hover:text-white"
                          >
                            <p>Topic 3</p>
                          </div>
                          <div
                            onClick={() => setCurrTopic("4")}
                            className=" font-medium text-topicgrey ml-4 hover:bg-hoverdarkblue pt-2 pb-2 pl-2 pr-2 hover:cursor-pointer border-l border-darkblue hover:text-white"
                          >
                            <p>Topic 4</p>
                          </div>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Topics;
