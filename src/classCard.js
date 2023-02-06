import React from "react";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { useContext } from "react";
import { ClassContext } from "./Context";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import { Button, Popup } from "semantic-ui-react";
import SubjectCard from "./subjectcard";
import { Dropdown } from "semantic-ui-react";

function ClassCard({ classProp, subjectsProp, subjectId }) {
  const a = useContext(ClassContext);
  const { setCurrClass, setCurrSubject, setCurrSubId } = a;

  return (
    <div className="flex flex-col z-50">
      <Dropdown
        labeled
        icon={null}
        closeOnEscape={true}
        text={
          <div className="hover:bg-cream flex items-center pl-10 pr-4 py-4 rounded-md ">
            <button>
              <div className="flex items-center text-s3 font-medium ">
                <p className="m-0 pr-12 text-black"> Class {classProp} </p>
                <NavigateNextIcon style={{ color: "#909296" }} />
              </div>
            </button>
          </div>
        }
        pointing="left"
      >
        <Dropdown.Menu>
          {subjectsProp.map((item) => {
            return (
              <div className="flex flex-col p-2">
                <button
                  onClick={() => {
                    setCurrSubject(item.subject);
                    setCurrClass(classProp);
                  }}
                  className="py-4 px-8 rounded-md hover:bg-cream font-thin"
                >
                  {item.subject}
                </button>
              </div>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default ClassCard;
