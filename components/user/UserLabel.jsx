import React from "react";
import MenuLabel from "../menu/MenuLabel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function UserLabel({ name, description, isOnline }) {
  const icon = (
    <FontAwesomeIcon
      icon={faCircle}
      className={isOnline ? "text-green-500" : "opacity-25"}
    />
  );

  return <MenuLabel text={name} description={description} icon={icon} />;
}
