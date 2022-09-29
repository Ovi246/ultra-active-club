import React from "react";

const Card = ({ item, handleClick, idx, isClicked }) => {
  return (
    <div className="flex flex-col gap-5 bg card h-full">
      <img src={item.img} alt="" className="w-full h-[50%] object-cover" />
      <h3 className="text-xl">{item.name}</h3>
      <p className="text-md h-[20%] text-ellipsis overflow-hidden">
        {item.info}
      </p>
      <span>Age: {item.age}</span>
      <span>Per Set Time: {item.time}s</span>
      <button
        className="bg-[#395B64] p-2 md:p-5 text-[#E7F6F2] hover:bg-[#E7F6F2] hover:text-[#395B64]"
        onClick={(e) => handleClick(e, item.time)}
      >
        {isClicked === true ? "Remove" : "Add Workout"}
      </button>
    </div>
  );
};

export default Card;
