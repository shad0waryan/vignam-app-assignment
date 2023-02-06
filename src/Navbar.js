import React from "react";
import logo from "./assets/LOGO.e32a926741797faf4641.png";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import Class from "./Class";
import "./navbar.css";
import MenuIcon from "@mui/icons-material/Menu";
import { useContext } from "react";
import Search from "./search";
import { ClassContext } from "./Context";
import { Popup } from "semantic-ui-react";
import { Modal } from "semantic-ui-react";
import TopicBar from "./topicBar";
function Navbar() {
  const a = useContext(ClassContext);
  const { currClass, currSubject } = a;
  const [open, setOpen] = React.useState(false);
  return (
    <div>
      <div className=" navbar">
        <div className="responsive__div flex items-center justify-between px-4 w-full">
          <Popup
            content={<TopicBar />}
            on="click"
            position="bottom left"
            pinned
            trigger={
              <div className="menu__div ">
                <MenuIcon />
              </div>
            }
          />
          <div>
            <Modal
              open={open}
              onClose={() => setOpen(false)}
              onOpen={() => setOpen(true)}
              trigger={
                <div className=" search__icon__button ">
                  <SearchIcon />
                </div>
              }
            >
              <Modal.Content>
                <Modal.Description>
                  <div className=" flex justify-center h-[500px] ">
                    <Search />
                  </div>
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </div>
        </div>

        <div className="navbar__div w-screen  ">
          <div className="left__div items-center  ">
            <img src={logo} alt="" width={"30px"} height={"40px"} />
          </div>
          <Popup
            content={<Class />}
            on="click"
            position="bottom center"
            pinned
            trigger={
              <div className="class__select border hover:cursor-pointer border-textblue flex ">
                <p className="text-s1 font-bold h-auto w-auto pr-4 m-0">
                  Class {currClass} {currSubject}
                </p>
                <KeyboardArrowDownIcon />
              </div>
            }
          />
          <Modal
            open={open}
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            trigger={
              <div className="search__div  bg-grey rounded-md border-grey justify-self-center ml-56 mr-20">
                <SearchIcon />
                <p className=" text-textgrey font-medium   ">
                  Search for Topic and Chapters
                </p>
              </div>
            }
          >
            <Modal.Content>
              <Modal.Description>
                <div className=" flex justify-center h-[500px] ">
                  <Search />
                </div>
              </Modal.Description>
            </Modal.Content>
          </Modal>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
