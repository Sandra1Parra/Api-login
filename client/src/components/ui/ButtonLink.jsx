import { Link } from "react-router-dom";

export const ButtonLink = ({ to, children }) => (
  <Link to={to} className="px-4 py-1 rounded-md" style={{backgroundColor:"rgba(255, 83, 165, 0.8)", border:"2px solid rgba(0, 0, 0, 1)", color:"black"}}>
    {children}
  </Link>
);
