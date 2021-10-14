import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

export class ThemeToggle extends Component {
  static contextType = ThemeContext;

  render() {
    const { toggleTheme } = this.context;
    return (
      <div className="toggle-view">
        <button onClick={toggleTheme} className="toggle-btn">
          Change Theme
        </button>
      </div>
    );
  }
}

export default ThemeToggle;
