import { Link } from "react-router-dom";

const Home = () => (
  <div className="container mt-5">
    <h1>Welcome to the LangChain Assistant</h1>
    <p className="mt-3">You can upload a PDF, chat with it, send emails, or schedule calendar events.</p>
    <Link className="btn btn-primary me-3" to="/upload">Upload PDF</Link>
    <Link className="btn btn-secondary" to="/chat">Go to Chat</Link>
  </div>
);

export default Home;
