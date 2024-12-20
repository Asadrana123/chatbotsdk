import React, { useState } from "react";
import "./chatbot.css";

// This is your chat bot component
const ChatBot = ({ containerId }) => {
  const [messages, setMessages] = useState([
    {
      sender: "bot",
      text: "Can you tell me more about what kind of information or assistance you're looking for today?",
    },
  ]);

  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim() !== "") {
      setMessages([...messages, { sender: "user", text: input }]);
      setInput("");
    }
  };

  return (
    <div className="chatbot-container">
      <div className="chatbot-header">
        <img src="https://static.intercomassets.com/assets/default-avatars/fin/128-6a5eabbb84cc2b038b2afc6698ca0a974faf7adc9ea9f0fb3c3e78ac12543bc5.png" alt="Bot Avatar" />
        <div className="chatbot-header-text-container">
          <span className="chatbot-title">NailIb</span>
          <span className="chatbot-badge">AI Agent</span>
        </div>
      </div>

      <div className="chatbot-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.sender === "user" ? (
              <div className="user-text">{msg.text}</div>
            ) : (
              <div className="bot-text">{msg.text}</div>
            )}
          </div>
        ))}
      </div>

      <div className="chatbot-footer">
        <input
          type="text"
          placeholder="Message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button className="send-button" onClick={handleSend}>
          ➤
        </button>
      </div>
    </div>
  );
};

// Expose a global function for external websites to use
window.initializeChatBot = (selector) => {
  const container = document.querySelector(selector);
  if (container) {
    // You can pass any additional props here if needed
    ReactDOM.render(<ChatBot />, container);
  }
};

export default ChatBot;
