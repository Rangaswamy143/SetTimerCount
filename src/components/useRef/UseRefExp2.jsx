import React, { useEffect, useRef } from "react";

const UseRefExp2 = () => {
  const inputDom = useRef("");
  useEffect(() => {
    console.log(inputDom);
  });

  const focus = () => {
    inputDom.current.focus();
    inputDom.current.value = "inchara";
  };
  return (
    <div>
      <input ref={inputDom} type="text" name="firstname" id="firstname" />
      <button onClick={focus}>focus</button>
    </div>
  );
};

export default UseRefExp2;
