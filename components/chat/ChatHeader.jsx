import React from "react";
import Searchbox from "../searchbox/Searchbox";

export default function ChatHeader({ primary, secondary }) {
  return (
    <div className="flex px-6 py-2 items-center shadow-sm">
      <div className="w-8/12">
        <h3 className="text-grey-darkest mb-1 mt-2 font-extrabold">
          {primary}
        </h3>
        <div className="text-grey-dark text-sm truncate">{secondary}</div>
      </div>
      <div className="w-4/12 ml-6">
        <Searchbox />
      </div>
    </div>
  );
}
