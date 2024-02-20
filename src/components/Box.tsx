import React from "react";
import { Pokemon } from "@/types/declaration";
import Image from "next/image";

export const Box = ({ name, image }) => {
  console.log(image);
  return (
    <div>
      <h1>{name}</h1>
      <Image src={image} alt={name} width={100} height={100} />
    </div>
  );
};

// export default Box;
