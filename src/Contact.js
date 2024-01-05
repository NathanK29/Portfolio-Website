import "./Contact.scss";
import { Routes, Route } from "react-router-dom";
import ContactLayout from "./components/Layout";

function Contact() {
  return (
    <>
      <Routes>
        <Route path="/contact" element={<ContactLayout />} />
      </Routes>
    </>
  );
}

export default Contact;
