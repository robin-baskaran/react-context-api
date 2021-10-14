import React, { useDebugValue, useEffect, useRef, useState } from "react";

const usePrevious = (value) => {
  const ref = useRef(null);

  useEffect(() => {
    ref.current = value;
  });

  useDebugValue(ref.current ? "address set" : "address not set");

  return ref.current;
};

const CustomHook = () => {
  const [address, setAddress] = useState("");
  const previousAddress = usePrevious(address);
  const handleAddress = (e) => {
    setAddress(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter new address"
        onBlur={(e) => handleAddress(e)}
      />
      <h2>Current Address: {address}</h2>
      <h2>Previous Address: {previousAddress}</h2>
    </div>
  );
};

export default CustomHook;
