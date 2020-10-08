import "../styles/index.css";
import UserCard from "../components/user/UserCard";
import ChannelsList from "../components/menu/ChannelsList";
import DirectMessages from "../components/menu/DirectMessages";
import { wrapper } from "../store";

function App({ Component, pageProps }) {
  return (
    <div className="font-sans antialiased">
      <div className="flex flex-wrap h-screen">
        <div className="w-1/5 bg-blue-900 text-gray-100 p-2">
          <h1 className="text-xl">Evil Corp</h1>
          <UserCard />
          <ChannelsList />
          <DirectMessages />
        </div>
        <div className="w-4/5">
          <Component {...pageProps} />
        </div>
      </div>
    </div>
  );
}
export default wrapper.withRedux(App);
