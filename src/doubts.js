import React from "react";
import SendIcon from "@mui/icons-material/Send";
function Doubts() {
  return (
    <div className="pt-16 px-20 flex flex-col justify-center h-screen items-center ">
      <div className="flex mt-64 border border-blackforborder rounded-md  w-4/5 m-1 p-1 items-center">
        <input
          type="text"
          placeholder="Ask any question."
          className="w-full p-8 outline-none"
        />
        <div>
          <SendIcon
            className="mr-4 hover:cursor-pointer -rotate-45"
            style={{ color: "#228be6" }}
            sx={{ fontSize: "40px" }}
          />
        </div>
      </div>
    </div>
  );
}

export default Doubts;
