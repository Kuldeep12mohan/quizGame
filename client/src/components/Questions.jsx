import React, { useState } from "react";

const Questions = () => {
  const [question, setQuestion] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const handleContinue = async()=>{
    
  }
  return (
    <div className="flex-col h-screen items-center justify-center md:flex ">
      <div>
        <div className="m-4">
          <input
            type="text"
            value={question}
            placeholder="enter your question"
            className="border-2 border-black w-full py-2 px-4 rounded-lg"
            onChange={e=>setQuestion(e.target.value)}
          />
        </div>
        <div className="flex gap-4 m-4">
          <input
            type="text"
            value={option1}
            placeholder="option 1"
            className="border-2 border-black py-1 px-1 rounded-lg"
            onChange={e=>setOption1(e.target.value)}
          />
          <input
            type="text"
            value={option2}
            placeholder="option 2"
            className="border-2 border-black py-1 px-1 rounded-lg"
            onChange={e=>setOption2(e.target.value)}
          />
        </div>
        <div className="flex gap-4 m-4">
          <input
            type="text"
            value={option3}
            placeholder="option 3"
            className="border-2 border-black py-1 px-1 rounded-lg"
            onChange={e=>setOption3(e.target.value)}
          />
          <input
            type="text"
            value={option4}
            placeholder="option 4"
            className="border-2 border-black py-1 px-1 rounded-lg"
            onChange={e=>setOption4(e.target.value)}
          />
        </div>
        <button className=" mx-4 bg-emerald-400 rounded-2xl font-bold text-slate-700 py-2 px-4">
          Continue
        </button>
      </div>
    </div>
  );
};

export default Questions;
