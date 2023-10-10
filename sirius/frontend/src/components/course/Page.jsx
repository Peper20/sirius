import React from "react";
import Name from "./Name";
import About from "./About";
import Authors from "./Authors";
import Benefits from "../main/Benefits";
import Sert from "../main/Sert";
import Footer from "../main/Footer";

function Page() {
  return (
    <div>
      <Name />
      <About />
      <Authors />
      <Benefits />
      <Sert />
      <Footer />
    </div>
  );
}

export default Page;
