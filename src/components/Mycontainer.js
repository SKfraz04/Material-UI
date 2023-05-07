import React from "react";
// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Mycounter from "./Mycounter";
import CardFlip from "./CardFlip";


function Mycontainer() {
  return (
    <div>
        <Mycounter />
        <CardFlip />
    </div>
  );
}

export default Mycontainer;