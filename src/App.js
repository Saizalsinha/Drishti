import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import VirtualeyePage from "./pages/VirtualeyePage";

function App() {
  return (
    <div>
      <Routes>
        
          <Route path="/" element={<Homepage />} exact />
          
          <Route path="/Virtual-eye" element={<VirtualeyePage />} />
        
      </Routes>
    </div>
  );
}

export default App;
