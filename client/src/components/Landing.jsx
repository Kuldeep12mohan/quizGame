import React from "react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-screen">
      <button className="py-2 px-4 bg-purple-400 rounded-lg font-bold" onClick={()=>{
        navigate("/questions")
      }}>
        Create a quiz
      </button>
      <div>
        <input type="text" placeholder="enter quiz code" className=" border-2 border-red-500 focus:border-blue-500 py-2 px-4 m-4 rounded-lg" />
      </div>
      <button className="py-2 px-4 bg-red-400 rounded-lg font-bold">
        Join a quiz
      </button>
    </div>
  );
};

export default Landing;
