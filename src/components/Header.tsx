import React from "react";
import SearchBar from "./SearchBar";

class Header extends React.Component {
  render() {
    return (
      <div className="fixed top-0 right-0 left-0 p-4 flex flex-row justify-between backdrop-blur-lg">
        <h1 className="text-dark font-bold">Personal Note Taking App</h1>
        <SearchBar />
      </div>
    );
  }
}

export default Header;
