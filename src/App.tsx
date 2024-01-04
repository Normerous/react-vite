import React, { Suspense, lazy, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <Suspense fallback={<div />}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="/About"
            element={
              <Suspense fallback={<div />}>
                <About />
              </Suspense>
            }
          />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
