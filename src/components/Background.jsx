import React from "react";

function background() {
  return (
    <>
    <div className="fixed h-full w-full z-[2] top-0 left-0">
      <h1 className="bigtext absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw] font-semibold leading-none tracking-tighter">
        Todo.
      </h1>
    </div>
    </>
  );
}

export default background;
