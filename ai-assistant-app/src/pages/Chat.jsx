import { useState } from "react";
import { sendQuery } from "../services/queryService";

const Chat = () => {
  const [query, setQuery] = useState("");
  const [messages, setMessages] = useState([]); // holds all messages

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    // Add user query to history
    setMessages((prev) => [...prev, { role: "user", content: query }]);
    setQuery(""); // clear input

    try {
      const res = await sendQuery(query);

      // Add AI response to history
      setMessages((prev) => [...prev, { role: "ai", content: res.text || "No response." }]);
    } catch {
      setMessages((prev) => [...prev, { role: "ai", content: "❌ Error processing your request." }]);
    }
  };

  return (
    <div className="container mt-5">
      <h2>Chat with AI</h2>
      <form onSubmit={handleSubmit}>
        <textarea
          className="form-control mb-3"
          rows="3"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Ask something..."
        ></textarea>
        <button type="submit" className="btn btn-primary">Send</button>
      </form>

      <div className="mt-4">
        {messages.map((msg, idx) => (
          <div key={idx} className={`alert ${msg.role === "user" ? "alert-secondary" : "alert-info"}`}>
            <strong>{msg.role === "user" ? "You" : "AI"}:</strong> {msg.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chat;
