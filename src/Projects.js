import { Routes, Route } from "react-router-dom";
import ProjectsLayout from "./components/Projects/Layout";

function Projects() {
  return (
    <>
      <Routes>
        <Route path="/projects" element={<ProjectsLayout />} />
      </Routes>
    </>
  );
}

export default Projects;
