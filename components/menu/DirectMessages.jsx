import React from "react";
import MenuSection from "./MenuSection";
import UserLabel from "../user/UserLabel";
import MenuSectionItem from "./MenuSectionItem";
import { useDispatch, useSelector } from "react-redux";
import { Actions } from "../../store";
import { useRouter } from "next/router";

export default function DirectMessages() {
  const router = useRouter();
  const { people } = useSelector((state) => state);
  const dispatch = useDispatch();

  const removeDirectMessage = (directMessageId) => {
    dispatch({
      type: Actions.REMOVE_DIRECT_MESSAGE,
      payload: { id: directMessageId },
    });
  };

  const getItems = () => {
    return people.map((dm) => (
      <MenuSectionItem
        key={dm.id}
        onClick={() => router.push(`/dm/${dm.id}`)}
        onDeleteButtonClick={() => removeDirectMessage(dm.id)}
      >
        <UserLabel name={dm.name} isOnline={dm.isOnline} />
      </MenuSectionItem>
    ));
  };

  return <MenuSection name="Direct messages" items={getItems()} />;
}
