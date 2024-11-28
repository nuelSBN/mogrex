import React from "react";
import CardTable from "../../components/Cards/CardTable";

// components

export default function Tables() {
  return (
    <>
      <div className="flex flex-wrap mt-4">
        <div className="mx-auto w-[60%] mb-12 px-4">
          <CardTable color="dark" />
        </div>
      </div>
    </>
  );
}
