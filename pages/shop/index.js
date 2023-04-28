import { useState } from "react";

export default function Shop() {
  const [myNumber, setMyNumber] = useState(42);

  return (
    <>
      <h1>Shop</h1>
      <p>{myNumber}</p>
    </>
  );
}
