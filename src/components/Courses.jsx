import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export const Courses = () => {
  const { isLightTheme, light, dark } = useContext(ThemeContext);
  const theme = isLightTheme ? light : dark;

  return (
    <div
      className="courses"
      style={{ backgroundColor: theme.bg, color: theme.color }}
    >
      <ul className="course-list">
        <li className="course-item" style={{ background: theme.ui }}>
          React JS
        </li>
        <li className="course-item" style={{ background: theme.ui }}>
          Node JS
        </li>
        <li className="course-item" style={{ background: theme.ui }}>
          Javascript
        </li>
      </ul>
    </div>
  );
};

export default Courses;
