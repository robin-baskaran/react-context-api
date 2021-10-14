import React, { Component } from "react";
import { ThemeContext } from "../context/ThemeContext";

export class NavBar extends Component {
  static contextType = ThemeContext;

  render() {
    const theme = this.context.isLightTheme
      ? this.context.light
      : this.context.dark;

    return (
      <header
        className="navbar"
        style={{ backgroundColor: theme.bg, color: theme.color }}
      >
        <h1>Context App</h1>
        <ul className="nav">
          <li className="nav-item">Home</li>
          <li className="nav-item">About</li>
          <li className="nav-item">Logout</li>
        </ul>
      </header>
    );
  }
}

export default NavBar;
