import React from "react";
import Doubts from "./doubts";
import Questions from "./questions";
import Simulation from "./simulation";
import Theory from "./theory";
import "./tabs.css";
import Videos from "./video";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
function TabBar() {
  return (
    <div className="flex mt-[55px] border-t-blackforborder h-4/6 pt-4 w-full  ">
      <Tabs
        isfitted
        variant="solid-rounded"
        colorScheme="blue"
        className="w-screen flex-row justify-between"
      >
        <div className="tab__bar flex justify-evenly  w-full mt-4 ">
          <TabList className="tab__list flex justify-between  ">
            <Tab className="tabbar__tab px-4 w-2/5 py-1 bg-textblue rounded md hover:bg-darkblue text-white font-bold text-s5 my-1">
              Theory
            </Tab>
            <Tab className="tabbar__tab px-4 w-2/5 py-1 bg-textblue rounded md hover:bg-darkblue text-white font-bold text-s5 my-1">
              Simulation
            </Tab>
            <Tab className="tabbar__tab px-4 w-2/5 py-1 bg-textblue rounded md hover:bg-darkblue text-white font-bold text-s5 my-1">
              Ask Doubts
            </Tab>
            <Tab className="tabbar__tab px-4 w-2/5 py-1 bg-textblue rounded md hover:bg-darkblue text-white font-bold text-s5 my-1 ">
              Videos/Animations
            </Tab>
            <Tab className="tabbar__tab px-4 w-2/5 py-1  bg-textblue rounded md hover:bg-darkblue text-white font-bold text-s5 my-1">
              Questions
            </Tab>
          </TabList>
        </div>
        <div className="block">
          <TabPanels>
            <TabPanel>
              <Theory />
            </TabPanel>
            <TabPanel>
              <Simulation />
            </TabPanel>
            <TabPanel>
              <Doubts />
            </TabPanel>
            <TabPanel>
              <Videos />
            </TabPanel>
            <TabPanel>
              <Questions />
            </TabPanel>
          </TabPanels>
        </div>
      </Tabs>
    </div>
  );
}

export default TabBar;
