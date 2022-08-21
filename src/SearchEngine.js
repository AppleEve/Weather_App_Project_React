import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine row">
      <form>
        <input
          className="search-window col-9"
          type="search"
          placeholder="select a city..."
        />
        <input className="submit-button col-2" type="submit" value="search" />
      </form>
    </div>
  );
}
