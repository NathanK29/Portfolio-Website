import { Routes, Route } from "react-router-dom";
import AboutLayout from "./components/About/Layout";

function About() {
  return (
    <>
      <Routes>
        <Route path="/about" element={<AboutLayout />} />
      </Routes>
    </>
  );
}

export default About;
