import React from "react";
import "./navbar.css";
import SearchIcon from "@mui/icons-material/Search";
function Search() {
  return (
    <div className=" w-full  flex flex-col rounded-md bl-text-blue border-grey px-4 py-4  justify-start text-center ">
      <div className="mt-2 border border-textblue flex items-center justify-start  px-3 text-textgrey rounded-md over h">
        <SearchIcon />
        <input
          type="text"
          className="outline-none ml-2 w-full py-3 text-black text-s3 font-medium"
          placeholder="Search for Topic/Chapters"
        />
      </div>
      <div className="flex flex-col mt-2">
        <span className="flex flex-col items-start py-2 hover:bg-hoverblue my-2 p-2 rounded-md gap-1">
          <p className="text-s3 font-medium">Introduction</p>
          <p className="text-s1 text-darkgrey">Verb</p>
        </span>
        <span className="flex flex-col items-start py-2 hover:bg-hoverblue my-2 p-2 rounded-md gap-1">
          <p className="text-s3 font-medium">Types of Verbs</p>
          <p className="text-s1 text-darkgrey">Verb</p>
        </span>
        <span className="flex flex-col items-start py-2 hover:bg-hoverblue my-2 p-2 rounded-md gap-1">
          <p className="text-s3 font-medium">Verb Forms</p>
          <p className="text-s1 text-darkgrey">Verb</p>
        </span>
        <span className="flex flex-col items-start py-2 hover:bg-hoverblue my-2 p-2 rounded-md gap-1">
          <p className="text-s3 font-medium">Punctuation</p>
          <p className="text-s1 text-darkgrey">
            Capitalization and Punctuation
          </p>
        </span>
        <span className="flex flex-col items-start py-2 hover:bg-hoverblue my-2 p-2 rounded-md gap-1">
          <p className="text-s3 font-medium">Introduction</p>
          <p className="text-s1 text-darkgrey">Noun</p>
        </span>
        <span className="flex flex-col items-start py-2 hover:bg-hoverblue my-2 p-2 rounded-md gap-1">
          <p className="text-s3 font-medium">Kinds of Noun</p>
          <p className="text-s1 text-darkgrey">Noun</p>
        </span>
        <span className="flex flex-col items-start py-2 hover:bg-hoverblue my-2 p-2 rounded-md gap-1">
          <p className="text-s3 font-medium">Subject and Predicate</p>
          <p className="text-s1 text-darkgrey">Subject and Predicate</p>
        </span>
        <span className="flex flex-col items-start py-2 hover:bg-hoverblue my-2 p-2 rounded-md gap-1">
          <p className="text-s3 font-medium">Antonyms</p>
          <p className="text-s1 text-darkgrey">Antonyms and Synonyms</p>
        </span>
        <span className="flex flex-col items-start py-2 hover:bg-hoverblue my-2 p-2 rounded-md gap-1">
          <p className="text-s3 font-medium">Synonyms</p>
          <p className="text-s1 text-darkgrey">Antonyms and Synonyms</p>
        </span>
        <span className="flex flex-col items-start py-2 hover:bg-hoverblue my-2 p-2 rounded-md gap-1">
          <p className="text-s3 font-medium">Adjective</p>
          <p className="text-s1 text-darkgrey">Adjective</p>
        </span>
        <span className="flex flex-col items-start py-2 hover:bg-hoverblue my-2 p-2 rounded-md gap-1">
          <p className="text-s3 font-medium">Adjective</p>
          <p className="text-s1 text-darkgrey">Adjective</p>
        </span>
        <span className="flex flex-col items-start py-2 hover:bg-hoverblue my-2 p-2 rounded-md gap-1">
          <p className="text-s3 font-medium">Adjective</p>
          <p className="text-s1 text-darkgrey">Adjective</p>
        </span>
        <span className="flex flex-col items-start py-2 hover:bg-hoverblue my-2 p-2 rounded-md gap-1">
          <p className="text-s3 font-medium">Adjective</p>
          <p className="text-s1 text-darkgrey">Adjective</p>
        </span>
        <span className="flex flex-col items-start py-2 hover:bg-hoverblue my-2 p-2 rounded-md gap-1">
          <p className="text-s3 font-medium">Adjective</p>
          <p className="text-s1 text-darkgrey">Adjective</p>
        </span>
      </div>
    </div>
  );
}

export default Search;
