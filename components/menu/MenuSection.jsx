import React, { useState } from "react";
import {
  faArrowRight,
  faArrowDown,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function MenuSection({ name, items }) {
  const [isVisible, setVisible] = useState(true);

  const toggleVisibility = () => {
    setVisible(!isVisible);
  };

  return (
    <div className="py-3">
      <div
        className="w-3 inline-block cursor-pointer"
        onClick={toggleVisibility}
      >
        <FontAwesomeIcon
          icon={isVisible ? faArrowDown : faArrowRight}
          size="xs"
        />
      </div>
      <span className="pl-1 cursor-pointer" onClick={toggleVisibility}>
        {name}
      </span>
      <div
        className="w-3 inline-block float-right mx-3 cursor-pointer"
        onClick={() => alert("Not implemented ;)")}
      >
        <FontAwesomeIcon icon={faPlus} size="xs" />
      </div>
      <div className="pt-2">{isVisible && items}</div>
    </div>
  );
}
