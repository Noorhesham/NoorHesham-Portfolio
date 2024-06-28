import React from "react";

const ButtonShine = ({ text }: { text: string }) => {
  return (
    <button className="inline-flex hover:text-gray-200 hover:duration-1000  h-12 md:animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none ">
      {text}
    </button>
  );
};

export default ButtonShine;
