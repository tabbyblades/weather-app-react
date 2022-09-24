import React from "react";
import { Rings } from 'react-loader-spinner';
import './App.css';
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <p>
          ello ello
        </p>
        <Weather city="London"/>
        <Rings
  height="80"
  width="80"
  color="pink"
  radius="6"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel="rings-loading"
/>
      </header>
    </div>
  );
}

export default App;
