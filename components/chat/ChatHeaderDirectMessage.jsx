import React from "react";
import ChatHeader from "./ChatHeader";

export default function ChatHeaderDirectMessage({ userLabel }) {
  return <ChatHeader primary={userLabel} />;
}
