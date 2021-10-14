import React, { useRef, useState, useEffect } from "react";

const Input = React.forwardRef((props, ref) => (
  <input
    onKeyDown={props.onKeyDown}
    ref={ref}
    type="text"
    placeholder={props.placeholder}
    style={props.style}
  />
));

const Counter = () => {
  useEffect(() => {
    firstNameRef.current.focus();
  }, []);
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  function firstNameKeyDown(e) {
    if (e.key === "Enter") {
      lastNameRef.current.focus();
    }
  }
  return (
    <div>
      <header>
        First Name:{" "}
        <Input
          ref={firstNameRef}
          placeholder="Enter first name here"
          onKeyDown={firstNameKeyDown}
        />
        <br />
        <br />
        Last Name:{" "}
        <Input ref={lastNameRef} placeholder="Enter last name here" />
        <br />
        <br />
      </header>
    </div>
  );
};
export default Counter;
