import React from "react";
import "./style.css";

const utils = require('./Utility.js');



export default function App() {
  console.log(utils.addNumbers(2, 3),"n");
    console.log(utils. Mul(2, 66),"n");  // Outputs 5
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
    </div>
  );
}
