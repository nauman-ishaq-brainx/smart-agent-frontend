import { useState } from "react";
import { sendQuery } from "../services/queryService";

const Chat = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { role: "user", content: query }]);
    setQuery("");
    setLoading(true);

    try {
      const res = await sendQuery(query);
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: res.response || "No response." },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "ai", content: "❌ Error processing your request." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: "700px" }}>
      <h3 className="mb-4 text-center">🧠 Chat with AI</h3>

      <div className="border rounded p-3 mb-4" style={{ height: "400px", overflowY: "auto", background: "#f8f9fa" }}>
        {messages.map((msg, idx) => (
          <div
            key={idx}
            className={`d-flex mb-3 ${msg.role === "user" ? "justify-content-end" : "justify-content-start"}`}
          >
            <div
              className={`p-2 rounded ${msg.role === "user" ? "bg-primary text-white" : "bg-light text-dark"}`}
              style={{ maxWidth: "75%" }}
            >
              <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}
            </div>
          </div>
        ))}
        {loading && (
  <div className="d-flex justify-content-start mb-3">
    <div className="p-2 bg-light rounded d-flex align-items-center">
      <span className="loading-spinner me-2"></span>
      Thinking...
    </div>
  </div>
)}
      </div>

      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <textarea
            className="form-control"
            rows="2"
            value={query}
            onChange={(e) => setQuery(e?.target?.value)}
            placeholder="Ask something..."
            disabled={loading}
          />
          <button type="submit" className="btn btn-success" disabled={loading}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
