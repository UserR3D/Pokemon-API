import PokemonsBox from "@/components/pokemonsBox";
import React, { Suspense } from "react";
import "../styles/globals.css";

const page = () => {
  return (
    <>
      <main className="grid grid-cols-5 gap-3 items-center justify-center max-w-screen-xl m-auto">
        <PokemonsBox />
      </main>
    </>
  );
};

export default page;
