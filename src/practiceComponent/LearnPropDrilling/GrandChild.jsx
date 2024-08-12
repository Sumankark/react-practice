import React, { useContext } from "react";
import { context1, context2 } from "../../App";

const GrandChild = () => {
  let value = useContext(context1);
  let value1 = useContext(context2);

  return (
    <>
      <div>GrandChild name is {value.name}</div>
      <div>Age is {value.age}</div>
      <p>Address is {value1}</p>
      <button
        onClick={() => {
          value.setName("Suman Karki");
        }}
      >
        Change Name
      </button>
    </>
  );
};

export default GrandChild;
