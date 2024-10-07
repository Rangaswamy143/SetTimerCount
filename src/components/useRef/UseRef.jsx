import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [firstName, setFirstName] = useState("");
  const [renderCounts, setRenderCounts] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    // console.log(renderCount);
    renderCount.current = renderCount.current + 1;
  });
  return (
    <div>
      <input
        type="text"
        name="firstname"
        id="firstname"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <br />
      <br />
      <button onClick={() => setRenderCounts(renderCounts + 1)}>+</button>
      count : {renderCounts}
      <button onClick={() => setRenderCounts(renderCounts - 1)}>-</button>
      <h1>typing : {firstName}</h1>
      <h4>Component Update Count : {renderCount.current}</h4>
    </div>
  );
};

export default UseRef;
