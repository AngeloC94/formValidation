import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Register from "./pages/Register";
import Success from "./pages/Success";
import React from 'react'
import Home from "./pages/Home";
import { AnimatePresence } from 'framer-motion'

function App() {
  return (
    <AnimatePresence mode="wait">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/success" element={<Success />} />
        </Routes>
      </Router>
    </AnimatePresence>
  )
}



export default App;
