import { Link } from "react-router-dom";

const Navbar = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
    <Link className="navbar-brand" to="/">LangChain App</Link>
    <div className="collapse navbar-collapse">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link" to="/upload">Upload</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/chat">Chat</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
