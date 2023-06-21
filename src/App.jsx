import { useState } from "react";
import { Route, Routes } from "react-router-dom";

import Repos from "../pages/Repos";
import Charts from "../pages/Charts";
import Signup from "../pages/Signup";
import Login from "../pages/Login";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/repos" element={<Repos />} />
      </Routes>
    </>
  );
}

export default App;
