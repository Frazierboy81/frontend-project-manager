import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="text-white flex justify-between items-center w-full h-10">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/projects/:projectsId">Projects Details</NavLink>
      <NavLink to="/auth">Login or Sign Up</NavLink>
    </nav>
  );
}
export default Navbar;