import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav.jsx";
import LeftSection from "./components/LeftSection.jsx";

import BottomSection from "./components/BottomSection.jsx"


function App() {

  return (
    <>
      <div className="outer-container">
        <Nav />
        <LeftSection />
        <BottomSection/>
      </div>
    </>
  );
}

export default App;
