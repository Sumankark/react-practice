import React, { useRef } from "react";

const Learn1UseRefHook = () => {
  let ref1 = useRef();
  let ref2 = useRef();
  let ref3 = useRef();
  return (
    <div>
      <div
        onClick={() => {
          ref3.current.focus();
        }}
      >
        focus on input1
      </div>
      <div
        onClick={() => {
          ref3.current.blur();
        }}
      >
        blur input1
      </div>
      <button
        onClick={(e) => {
          ref1.current.style.backgroundColor = "Red";
        }}
      >
        Change bg of Ram
      </button>
      <button
        onClick={(e) => {
          ref2.current.style.backgroundColor = "Blue";
        }}
      >
        Change bg of Sita
      </button>
      <div ref={ref1}>Ram</div>
      <div ref={ref2}>Sita</div>

      <input type="text" ref={ref3} />
    </div>
  );
};

export default Learn1UseRefHook;
