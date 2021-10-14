import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

export class Courses extends Component {
  static contextType = ThemeContext;

  render() {
    const { isLightTheme, light, dark } = this.context;
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
  }
}

export default Courses;
