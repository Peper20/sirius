import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import First from "./components/main/FirstPage";
import SecondPage from "./components/main/SecondPage";

import Header from "./components/main/Header";
import OurBackground from "./components/main/OurBackground";
import Seach from "./components/main/Seach";
import Authors from "./components/main/Authors";
import Benefits from "./components/main/Benefits";
import Sert from "./components/main/Sert";
import Footer from "./components/main/Footer";
import Page from "./components/course/Page";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      {/*<First />
      <SecondPage />
      <OurBackground />
      <Seach />
      <Authors />
      <Benefits />
      <Sert />
      <Footer /> */}
      <Page />
    </>
  );
}

export default App;
