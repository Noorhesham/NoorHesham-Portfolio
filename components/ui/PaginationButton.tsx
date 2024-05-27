import React from "react";

const PaginationButton = ({onClick,text,disabled}:{onClick:any,text:string,disabled:boolean}) => {
  return (
    <button disabled={disabled} onClick={onClick} className="p-[3px] disabled:opacity-70  disabled:cursor-not-allowed  relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
        {text}
      </div>
    </button>
  );
};

export default PaginationButton;
