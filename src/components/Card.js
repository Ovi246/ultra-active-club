import React from "react";

const Card = ({ item }) => {
  return (
    <div className="flex flex-col gap-5 bg card">
      <img src={item.img} alt="" />
      <h3 className="text-xl">{item.name}</h3>
      <p className="text-md">{item.info}</p>
      <span>{item.age}</span>
      <span>{item.time}</span>
      <button>Add to List</button>
    </div>
  );
};

export default Card;
