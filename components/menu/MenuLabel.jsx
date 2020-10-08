import React from "react";

export default function MenuLabel({
  text,
  icon,
  description,
  active,
  onClick,
}) {
  const renderText = () => {
    if (active) {
      return <span className="font-bold">{text}</span>;
    }
    return text;
  };

  return (
    <div className="flex text-xs" onClick={onClick}>
      <div className="flex-initial">
        <div className="w-2 inline-block">{icon}</div>
      </div>
      <div className="flex-initial pl-2">
        {renderText()} <small className="text-gray-400">{description}</small>
      </div>
    </div>
  );
}
