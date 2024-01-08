import "./Contact.scss";
import { Routes, Route } from "react-router-dom";
import ContactLayout from "./components/Contact/Layout";

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
