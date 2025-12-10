import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProjectsPage from "./pages/ProjectsPage";
import Navbar from "./components/Navbar";
import ProjectDetailsPage from "./pages/ProjectDetails";
import LoginPage from "./pages/LoginPage";
import AuthPage from "./pages/AuthPage";



function App() {
  return (
    <>
      <div className="p-5 bg-zinc-900 h-screen">
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}/>
          <Route path="/auth" element={<AuthPage />}/>          
          <Route path="/login" element={<LoginPage />}/>
          <Route path="/projects" element={<ProjectsPage />}/>
          <Route path="/projects/:projectId" element={<ProjectDetailsPage />}/>
        </Routes>
      </div>
    </>
  );
}
export default App;
