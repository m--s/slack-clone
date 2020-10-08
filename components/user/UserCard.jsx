import React from "react";
import state from "../../mocks";
import UserLabel from "./UserLabel";

export default function UserCard() {
  return (
    <div className="shadow pt-2 pb-2">
      <UserLabel
        name={state.currentUser.name}
        isOnline={state.currentUser.isOnline}
      />
    </div>
  );
}
