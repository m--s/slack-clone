import React from "react";
import MenuSection from "./MenuSection";
import MenuLabel from "./MenuLabel";
import MenuSectionItem from "./MenuSectionItem";
import { connect, useSelector, useDispatch } from "react-redux";
import { Actions } from "../../store";
import { useRouter } from "next/router";

function ChannelsList() {
  const { channels } = useSelector((state) => state);
  const dispatch = useDispatch();
  const router = useRouter();

  const removeChannel = (channelId) => {
    dispatch({ type: Actions.REMOVE_CHANNEL, payload: { id: channelId } });
  };

  const getItems = () => {
    return channels.map((channel) => (
      <MenuSectionItem
        onDeleteButtonClick={() => removeChannel(channel.id)}
        key={channel.id}
        onClick={() => router.push(`/channel/${channel.id}`)}
      >
        <MenuLabel key={channel.id} text={channel.name} icon={"#"} />
      </MenuSectionItem>
    ));
  };

  return <MenuSection name="Channels" items={getItems()} />;
}
export default connect((state) => state)(ChannelsList);
