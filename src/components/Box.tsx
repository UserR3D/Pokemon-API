import React from "react";
import { Pokemon } from "@/types/declaration";
import Image from "next/image";

export const Box = ({ name, image, types }) => {
  return (
    <div>
      <h3>{name}</h3>
      <Image src={image} alt={name} width={100} height={100} loading="eager" />
      {types.map((item) => {
        return <span key={item.slot}>{item.type.name}</span>;
      })}
    </div>
  );
};

// export default Box;
