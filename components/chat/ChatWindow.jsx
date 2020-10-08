import React, { useEffect, useRef } from "react";

export default function ChatWindow({ header, messages }) {
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current.scrollIntoView();
  };

  useEffect(scrollToBottom, [messages]);

  return (
    <div className="flex flex-col h-screen">
      <header>{header}</header>
      <main className="flex-1 overflow-y-auto p-5 pb-0">
        {messages}
        <div className="flex items-start" ref={messagesEndRef} />
      </main>
      <footer className="py-1 border-1 text-center">
        <div className="mx-4">
          <textarea
            className="flex-grow py-2 px-4 rounded-md border border-gray-300 bg-gray-200 w-full outline-none text-xs"
            rows="2"
            placeholder="Message..."
          />
        </div>
      </footer>
    </div>
  );
}
