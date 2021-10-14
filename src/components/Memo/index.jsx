import React, { useState } from "react";
import MemoCounter from "./MemoCounter";

const Memo = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  const increaseCounter1 = React.useCallback(() => {
    setCount1((count1) => count1 + 1);
  }, [count1]);
  const increaseCounter2 = React.useCallback(() => {
    setCount2((count2) => count2 + 1);
  }, [count2]);
  return (
    <div>
      <MemoCounter onClick={increaseCounter1} value={count1}>
        Counter 1
      </MemoCounter>
      <MemoCounter onClick={increaseCounter2} value={count2}>
        Counter 2
      </MemoCounter>
    </div>
  );
};

export default Memo;
