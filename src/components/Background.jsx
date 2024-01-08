import React from "react";

function Background() {
  return (
    <>
      <div className="fixed w-full h-screen z-[2]">
        <div className="text-zinc-500 absolute top-[5%] w-full flex justify-center">
          <h3 className="text-md">Documents</h3>
        </div>
        <h1 className="text-[12rem] font-bold text-zinc-900 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          DOCS.
        </h1>
      </div>
    </>
  );
}

export default Background;
