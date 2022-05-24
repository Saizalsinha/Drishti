import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import VirtualeyePage from "./pages/VirtualeyePage";
import Navigation from "./components/Navigation";
import ObjectRecognition from "./pages/ObjectRecognition";

function App() {
  return (
    <div>
    <Navigation/>
      <Routes>
        
          <Route path="/" element={<Homepage />} exact />
          
          <Route path="/Virtual-eye" element={<VirtualeyePage />} />

          <Route path="/Virtual-eye/Object-recognition" element={<ObjectRecognition />} />
        
      </Routes>
    </div>
  );
}

export default App;

