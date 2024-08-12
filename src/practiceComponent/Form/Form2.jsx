import React, { useState } from "react";

const Form2 = () => {
  let [isMarried, setIsMarried] = useState(false);
  let onSubmit = (e) => {
    e.preventDefault();

    let data = {
      isMarried: isMarried,
    };
    console.log(data)
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="isMarried">isMarried</label>
          <br />
          <input
            type="checkBox"
            id="isMarried"
            checked={isMarried === true}
            onChange={(e) => {
              setIsMarried(e.target.checked);
            }}
          />
        </div>
        <button type="submit">Proceed</button>
      </form>
    </div>
  );
};

export default Form2;
