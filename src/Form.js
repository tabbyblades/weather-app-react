import React from "react";
import "./Form.css";

export default function Form() {
  return (
    <div className="Form">
      <nav className="navbar navbar-light">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Location"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    </div>
  );
}