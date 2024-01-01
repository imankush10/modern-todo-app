import React, { useRef, useState } from "react";
import Card from "./Card";
import { IoMdAdd } from "react-icons/io";
import { v4 as uuidv4 } from 'uuid';

const Foreground = () => {
  const ref = useRef();
  const initialCardId = uuidv4(); // generate a UUID for the initial card
  const [cards, setCards] = useState([<Card reference={ref} key={initialCardId} delete={() => deleteHandler(initialCardId)}/>]);

  const cardAdd = () => {
    const newCardId = uuidv4(); // generate a UUID for the new card
    setCards((prevCards) => [
      ...prevCards,
      <Card key={newCardId} reference={ref} delete={() => deleteHandler(newCardId)}/>,
    ]);
  };

  const deleteHandler = (id) => {
    setCards((prevCards) => prevCards.filter((card) => card.key !== id));
  };

  return (
    <>
      <div
        ref={ref}
        className="fixed top-0 left-0 z-[99] h-screen w-full flex items-start p-10 gap-8 flex-wrap flex-shrink-0"
      >
        {cards}
        <button
          className="h-screen fixed -right-28 transition-all bottomColor top-0 rounded-3xl bg-white text-9xl hover:-right-4 active:text-[9rem]"
          onClick={cardAdd}
        >
          <IoMdAdd />
        </button>
      </div>
    </>
  );
};

export default Foreground;
