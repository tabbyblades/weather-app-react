import React from "react";
import "./Form.css";

export default function Form() {
  return (
        <form className="form">
          <input type= "search" className="searchForm"/>
           <input type ="submit" value="search" className="submitButton"/>
        </form>

  );
}