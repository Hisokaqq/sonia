import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./screens/Home";
import Model from "./screens/Model";
import Photos from "./screens/Photos";

import "./App.scss";
import Header from "./components/Header";
import Cursor from "./components/Cursor";
import { useEffect, useState } from "react";
import Me from "./screens/Me";

function App() {
  const location = useLocation();
  const [cursorVariant, setCursorVariant] = useState("default");
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const imageDetails = {
    width: 640,
    height: 640,
  };
  
  
  return (
    <div className="App">
      <Cursor cursorVariant={cursorVariant} setCursorVariant={setCursorVariant} />
      <Header  setCursorVariant={setCursorVariant} />

      <AnimatePresence mode={ "wait"}>
        <Routes location={ location} key={location.pathname}>
          

          <Route
            path="/"
            element={<Home imageDetails={imageDetails} setCursorVariant={setCursorVariant} />}
          />
          <Route
            path="/model"
            element={<Model imageDetails={imageDetails} setCursorVariant={setCursorVariant} />}
          />
          <Route path="/beautifulMe" element={<Photos setCursorVariant={setCursorVariant} />} />
          <Route path="/me/:id" element={<Me setCursorVariant={setCursorVariant} />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
