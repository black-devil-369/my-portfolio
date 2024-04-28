import Link from "next/link";
import React from "react";
import "./Nav.css";
export default function NavBar() {
  return (
    <>
      <div className="mt-2">
        <div className="flex flex-row space-x-4">
          <div>
            <button>
              <Link href={"/"}>Home</Link>
            </button>
          </div>
          <div>
            <button>
              <Link href={"/about-us"}>About</Link>
            </button>
          </div>
          {/* Here css for button of sign in and sign up pages*/}
          <div className="flex flex-row space-x-4">
            <div>
              <button id="button">
                <Link href={"/skills"}>Skills</Link>
              </button>
            </div>
            <div>
              <button id="button">
                <Link href={"/contacts"}>Contact-Us</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
