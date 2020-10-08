import React, { useState } from "react";
import { faTimes } from "@fortawesome/free-solid-svg-icons/index";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuSectionItem({
  children,
  onClick = () => {},
  onDeleteButtonClick,
}) {
  const [isHovered, setHovered] = useState(false);

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  const getClassName = () => {
    if (isHovered) {
      return "bg-blue-800 px-2 shadow-xs rounded-md";
    }
    return "px-2";
  };

  const renderDeleteButton = () => {
    if (!isHovered || !onDeleteButtonClick) {
      return;
    }
    return (
      <div
        className="inline-block float-right cursor-pointer"
        onClick={(e) => onDeleteButtonClick(e)}
      >
        <FontAwesomeIcon icon={faTimes} size="xs" />
      </div>
    );
  };

  return (
    <div
      className={getClassName()}
      onMouseEnter={() => handleMouseEnter()}
      onMouseLeave={() => handleMouseLeave()}
    >
      <div
        className="inline-block cursor-pointer w-11/12"
        onClick={() => onClick()}
      >
        {children}
      </div>
      {renderDeleteButton()}
    </div>
  );
}
