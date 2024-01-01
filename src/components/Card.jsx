import React, { useState, useEffect } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { MdOutlineEdit } from "react-icons/md";
import { IoMdAdd } from "react-icons/io";
import { motion } from "framer-motion";

const Card = (props) => {
  const [isDone, setIsDone] = useState(false);
  const [edit, setEdit] = useState(true);
  const [val, setVal] = useState("");
  const [desc, setDesc] = useState("");

  const toggleDone = () => {
    setIsDone(!isDone);
  }
  function editHandler() {
    console.log(edit)
    setEdit(!edit);
  }

  return (
    <motion.div
      drag
      whileDrag={{ scale: 1.1 }}
      dragConstraints={props.reference}
      dragTransition={{ bounceStiffness: 100, bounceDamping: 30 }}
      className="card relative w-64 h-[30%] rounded-[40px] overflow-hidden"
    >
      <div className={`px-5 py-5 flex flex-col gap-5 text-white ${isDone? 'line-through' : ''}`}>
        {edit ? (
          <textarea
            type="text"
            placeholder="Task"
            className="text-xl font-semibold outline-none bg-transparent resize-none border-b"
            value={val}
            onChange={(e) => setVal(e.target.value)}
          />
        ) : (
          <div className="text-xl font-semibold">{val}</div>
        )}

        {edit ? (
          <textarea
            placeholder="Description"
            rows={2}
            className="ml-4 text-base outline-none bg-transparent resize-none border-b"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        ) : (
          <div className="text-base ml-4">{desc}</div>
        )}
      </div>
      <div className="footer absolute bottom-0 w-full">
        <div className="w-full py-2 flex justify-around items-center text-sm font-semibold">
          <button className="buttons rounded-lg px-1 py-1">
            <RiDeleteBinLine size="1.5rem" onClick={()=>props.delete()}/>
          </button>
          <button className="buttons bottomText px-2 py-1 rounded-lg" onClick={toggleDone}>
            Done
          </button>
          <button
            className="buttons rounded-lg px-1 py-1"
            onClick={editHandler}
          >
            {edit ? <IoMdAdd size="1.5rem" /> : <MdOutlineEdit size="1.5rem" />}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Card;
