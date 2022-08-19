import React from "react";
import "./SearchEngine.css";

export default function SearchEngine() {
  return (
    <div className="SearchEngine">
      <form>
        <input type="search" placeholder="Select a city..." />
        <input type="submit" title="Search" />
      </form>
    </div>
  );
}
