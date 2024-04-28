import React from "react";

export default function Skills() {
  return (
    <>
      <div>
        <div className="mt-5">
          <h1 className="text-5xl font-bold text-center">Technical Skills</h1>
        </div>
        <div className="mt-6">
          <h2 className="font-bold text-center">Programing Language</h2>
        </div>
        <div className="flex flex-row justify-center">
          <img src="/C.png" width={"100px"} />
          <img src="/C++.png" width={"100px"} />
          <img src="/JavaScript.png" width={"100px"} />
          <img src="/TypeScript.png" width={"100px"} />
          <img src="/python.png" width={"100px"} />
        </div>
        <div>
          <h1 className="font-semibold text-center mt-6 text-2xl">
            Frontend Library
          </h1>
          <div className="flex flex-row justify-center mt-5">
            <img src="/React.png" width={"100px"} />
          </div>
          <div className="flex flex-row justify-center">
            <h2 className="font-semibold text-2xl">Familiar With</h2>
            <div>
              <img src="/Java.png" width={"100px"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
