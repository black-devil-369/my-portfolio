import { Button, Checkbox, Label, TextInput } from "flowbite-react";
import React from "react";
//import "./contact.css";
export default function Contact() {
  return (
    <div id="form">
      <form className=" bg-slate-100 shadow-lg shadow-stone-300 px-60 py-56 rounded-lg">
        <div className="flex justify-center  flex-col gap-4">
          <div>
            <div>
              <Label htmlFor="email" value="Your Email" />
            </div>
            <TextInput
              id="email"
              type="email"
              placeholder="yourname@0000gmail.com"
              required
            />
          </div>
          <div>
            <div>
              <Label htmlFor="password" value="Your Password" />
            </div>
            <TextInput id="password" type="password" required />
          </div>
          <div>
            <Checkbox id="remember" />
            <Label htmlFor="remember">Remember me</Label>
          </div>
          <Button type="sumbit">Submit</Button>
        </div>
      </form>
    </div>
  );
}
