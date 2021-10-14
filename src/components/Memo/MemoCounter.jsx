import React from "react";

const MemoCounter = ({ value, children, onClick }) => {
  return (
    <button onClick={onClick}>
      {children}: {value}
    </button>
  );
};
export default React.memo(MemoCounter);
