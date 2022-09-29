import React from "react";

const Card = ({ item, handleClick, idx }) => {
  return (
    <div className="flex flex-col gap-5 bg card">
      <img src={item.img} alt="" />
      <h3 className="text-xl">{item.name}</h3>
      <p className="text-md h-[50%]">{item.info}</p>
      <span>Age: {item.age}</span>
      <span>Per Set Time: {item.time}s</span>
      <button
        className="bg-[#395B64] p-5 text-[#E7F6F2] hover:bg-[#E7F6F2] hover:text-[#395B64]"
        onClick={() => handleClick(item.time, idx)}
      >
        Add to List
      </button>
    </div>
  );
};

export default Card;
