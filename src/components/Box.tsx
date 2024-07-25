import React from "react";
import Image from "next/image";
import "../styles/globals.css";
import { Types } from "@/types/declaration";

interface BoxProps {
  name: string;
  front_default: string;
  types: Types;
}

const Box = ({ name, front_default, types }: BoxProps) => {
  return (
    <div className="justify-center text-center  bg-slate-200 p-4">
      <Image
        className="m-auto"
        src={front_default}
        alt={name}
        width={100}
        height={100}
        loading="eager"
      />
      <div className="capitalize text-start">
        <h5 className="text-3xl">{name}</h5>
        {types.map((item) => {
          return (
            <span
              className={`${
                item.type.name === "fire" ? "bg-red-600 text-white" : ""
              } 
              ${item.type.name === "grass" ? "bg-green-600" : ""}
              ${item.type.name === "water" ? "bg-blue-600 text-white" : ""}
              ${item.type.name === "poison" ? "bg-indigo-600 text-white" : ""}
              ${item.type.name === "flying" ? "bg-blue-300" : ""}
              ${item.type.name === "bug" ? "bg-lime-600 text-white" : ""}
              ${item.type.name === "normal" ? "bg-zinc-300" : ""}
              uppercase p-1`}
              key={item.slot}
            >
              {item.type.name}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default Box;
