import React from "react";

export default function ChatMessage({ avatar, sender, time, body }) {
  return (
    <div className="flex items-start my-4 text-sm">
      {avatar}
      <div className="flex-1 overflow-hidden">
        <div>
          <span className="font-bold">{sender}</span>
          <span className="text-grey text-xs ml-2">{time}</span>
        </div>
        <p className="text-black leading-normal">{body}</p>
      </div>
    </div>
  );
}
