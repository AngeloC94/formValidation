import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";


function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="font-latoRegular h-screen w-screen flex items-center justify-center"
    >
        
      
      <div className=" flex p-10 flex-col items-center w-screen bg-white mx-80 rounded-lg">
      <h1 className="text-3xl py-5">Welcome! Click on the register button to get started!😎 </h1>
        <Link to="/">
          <button
            type="submit"
            className="font-bold text-sm text-white py-3 mt-6 rounded-lg w-40"
            style={{ backgroundColor: "#4286f4" }}
          >
            Home
          </button>
        </Link>
        <Link to="/register">
          <button
            type="submit"
            className="font-bold text-sm text-white py-3 mt-6 rounded-lg w-40"
            style={{ backgroundColor: "#4286f4" }}
          >
            Register
          </button>
        </Link>       
      </div>      
    </motion.div>
  );
}

export default Home;
