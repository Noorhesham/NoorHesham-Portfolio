"use client";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import React from "react";

const TypeWriter = ({ words }: { words: string[] }) => {
  const [text] = useTypewriter({
    words,
    loop: true,
  });
  return (
    <div className="flex text-center items-start my-4 ">
      <h2 className="  capitalize tracking-widest text-xs w-full  text-center text-blue-100 ">
        Just like Spider-Man swings between skyscrapers, I swing between <span>{text}</span>
        <span className="text-pink-500">
          <Cursor />
        </span>
      </h2>
    </div>
  );
};

export default TypeWriter;
