import React, { useState, useEffect } from "react";
import Head from "next/head";
import ChatWindow from "../../components/chat/ChatWindow";
import { connect, useSelector } from "react-redux";
import { useRouter } from "next/router";
import UserLabel from "../../components/user/UserLabel";
import ChatHeaderDirectMessage from "../../components/chat/ChatHeaderDirectMessage";
import faker from "faker";
import ChatMessage from "../../components/chat/ChatMessage";
import Avatar from "../../components/user/Avatar";
import { getHourAndMinuteFromDate, getRandomFromArray } from "../../utils";

const DirectMessageChat = () => {
  const router = useRouter();
  const { id } = router.query;

  const [recipient, setRecipient] = useState({ name: "", isOnline: false });
  const { people, currentUser } = useSelector((state) => state);

  useEffect(() => {
    if (id) {
      setRecipient(people.find((dm) => dm.id === +id));
    }
  }, [id]);

  if (id && !recipient) {
    router.push("/404");
    return null;
  }

  const userLabel = (
    <UserLabel name={recipient.name} isOnline={recipient.isOnline} />
  );
  const chatHeader = <ChatHeaderDirectMessage userLabel={userLabel} />;

  const getMessages = () => {
    return [...new Array(30)].map((_, index) => {
      const sender = getRandomFromArray([recipient, currentUser]);
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

  return (
    <div className="container">
      <Head>
        <title>Slack clone - {recipient.name}</title>
      </Head>

      <main>
        <ChatWindow header={chatHeader} messages={getMessages()} />
      </main>
    </div>
  );
};

export default connect((state) => state)(DirectMessageChat);
