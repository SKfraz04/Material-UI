import React from "react";
import "./App.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from "./components/MyNavbar";
import MyBanner from "./components/MyBanner";
import Mycontainer from "./components/Mycontainer";

function App() {
  return (
    <div>
      <MyNavbar />
      <MyBanner />
      <Mycontainer />
    </div>
  );
}

export default App;