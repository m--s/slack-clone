import { createStore } from "redux";
import { createWrapper, HYDRATE } from "next-redux-wrapper";
import mocks from "./mocks";

const initialState = {
  currentUser: mocks.currentUser,
  channels: mocks.channels,
  people: mocks.people,
};

export const Actions = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
  REMOVE_CHANNEL: "REMOVE_CHANNEL",
  REMOVE_DIRECT_MESSAGE: "REMOVE_DIRECT_MESSAGE",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state, ...action.payload };
    case Actions.SET_CURRENT_USER:
      return { ...state, currentUser: action.payload };
    case Actions.REMOVE_CHANNEL:
      return {
        ...state,
        channels: state.channels.filter(
          (channel) => channel.id !== action.payload.id
        ),
      };
    case Actions.REMOVE_DIRECT_MESSAGE:
      return {
        ...state,
        people: state.people.filter(
          (directMessage) => directMessage.id !== action.payload.id
        ),
      };
    default:
      return state;
  }
};

const makeStore = (context) => createStore(reducer);

export const wrapper = createWrapper(makeStore, { debug: true });
