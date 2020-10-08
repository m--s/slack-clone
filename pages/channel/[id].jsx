import React, { useState, useEffect } from "react";
import Head from "next/head";
import ChatHeader from "../../components/chat/ChatHeader";
import ChatWindow from "../../components/chat/ChatWindow";
import { connect, useSelector } from "react-redux";
import { useRouter } from "next/router";
import ChatMessage from "../../components/chat/ChatMessage";
import Avatar from "../../components/user/Avatar";
import faker from "faker";
import { getHourAndMinuteFromDate, getRandomFromArray } from "../../utils";

const ChannelChat = () => {
  const router = useRouter();
  const { id } = router.query;

  const [currentChannel, setCurrentChannel] = useState({
    name: "",
    description: "",
  });
  const { channels, people } = useSelector((state) => state);

  useEffect(() => {
    if (id) {
      setCurrentChannel(channels.find((channel) => channel.id === +id));
    }
  }, [id]);

  if (id && !currentChannel) {
    router.push("/404");
    return null;
  }

  const getMessages = () => {
    return [...new Array(40)].map((_, index) => {
      const sender = getRandomFromArray(people);
      const avatar = <Avatar url={sender.avatar} />;

      return (
        <ChatMessage
          key={index}
          sender={sender.name}
          avatar={avatar}
          time={getHourAndMinuteFromDate(faker.date.past())}
          body={faker.lorem.sentences()}
        />
      );
    });
  };

  const chatHeader = (
    <ChatHeader
      primary={`#${currentChannel.name}`}
      secondary={currentChannel.description}
    />
  );

  return (
    <div className="container">
      <Head>
        <title>Slack clone - #{currentChannel.name} </title>
      </Head>

      <main>
        <ChatWindow header={chatHeader} messages={getMessages()} />
      </main>
    </div>
  );
};

export default connect((state) => state)(ChannelChat);
