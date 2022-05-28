import React from "react";
import { Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import Vision from "./pages/Vision";
import Navigation from "./components/Navigation";
import ObjectRecognition from "./pages/ObjectRecognition";
import ReadText from "./pages/ReadText";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Homepage />} exact />

        <Route path="/Vision" element={<Vision />} />

        <Route
          path="/Vision/Object-recognition"
          element={<ObjectRecognition />}
        />

        <Route path="/Vision/Read-Text" element={<ReadText />} />
      </Routes>
    </div>
  );
}

export default App;
