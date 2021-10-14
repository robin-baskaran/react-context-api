import { createContext } from "react";

export const ThemeContext = createContext();

import React, { Component } from "react";

export class ThemeProvider extends Component {
  constructor() {
    super();
    this.state = {
      isLightTheme: true,
      light: { color: "#555", ui: "#ddd", bg: "#eee" },
      dark: { color: "#ddd", ui: "#333", bg: "#555" },
    };
    this.toggleTheme = this.toggleTheme.bind(this);
  }

  toggleTheme() {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  }
  render() {
    return (
      <ThemeContext.Provider
        value={{ ...this.state, toggleTheme: this.toggleTheme }}
      >
        {this.props.children}
      </ThemeContext.Provider>
    );
  }
}
