import React from "react";
// import "./skills.css";
export default function Skills() {
  return (
    <>
      <div>
        <div className="mt-5">
          <h1 className="text-5xl font-bold text-center bg-gradient-to-r from-blue-600 via-green-700 to-amber-600 shadow-xl shadow-green-800">
            Technical Skills
          </h1>
        </div>
        <div className="grid justify-center mt-8 text-3xl">
          <p className="bg-gradient-to-r from-pink-600 to-fuchsia-500 rounded-xl px-3 text-center">
            Data Structure And Algorithms
          </p>
          <p>Intermediate In The Problme Solving</p>
        </div>
        <div className="mt-6">
          <h2 className="font-bold text-center text-4xl text-fuchsia-500">
            Programing <span>Language</span>
          </h2>
        </div>
        <div className="flex flex-row flex-wrap justify-center space-x-6 mt-6">
          <img src="/C.png" alt="C" width={"100px"} />
          <img src="/C++.png" alt="C++" width={"100px"} />
          <img src="/JavaScript.png" alt="JavaScript" width={"100px"} />
          <img src="/TypeScript.png" alt="TypeScript" width={"100px"} />
          <img src="/python.png" alt="Python" width={"100px"} />
        </div>
        <div>
          <h1 className="font-semibold text-center mt-6 text-3xl bg-gradient-to-bl from-cyan-400 to-emerald-500">
            Frontend Library
          </h1>
          <div className="flex flex-row justify-center mt-5">
            <img src="/React.png" width={"100px"} />
          </div>
          <div className="grid text-3xl font-serif justify-center mt-6">
            <h1 className="text-center bg-gradient-to-l from-lime-400 to-orange-500 px-5 py-2 rounded-xl shadow-md shadow-lime-500">
              Backend FrameWork
            </h1>
            <img className="mt-6" src="/django.png" width={"100px"} />
          </div>
          <div>
            <h2 className="font-semibold text-2xl text-center mt-6">
              Familiar With
            </h2>
          </div>
          <div className="flex flex-row mt-5 justify-center gap-6">
            <img src="/Java.png" width={"100px"} />
            <img src="/c-sharp.png" width={"100px"} />
          </div>
        </div>
      </div>
    </>
  );
}
