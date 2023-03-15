import React from "react";
import { useSelector } from "react-redux";

export default function Counter() {
  const countStore = useSelector((state) => state.count);

  return (
    <div>
      <h1>{countStore}</h1>
    </div>
  );
}
