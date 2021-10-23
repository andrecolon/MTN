import React from "react";
import "./Chat.css";
import ChatHeader from "./ChatHeader";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";
import EmojiEmotionsIcon from "@material-ui/icons/EmojiEmotions";
import GifIcon from "@material-ui/icons/Gif";
import Message from "./Message";
import { selectChannelId, selectChannelName } from "./features/appSlice";
import { useSelector } from "react-redux";
import { selectUser } from "./features/userSlice";

function Chat() {
  const user = useSelector(selectUser);
  const channelId = useSelector(selectChannelId);
  const channelName = useSelector(selectChannelName);
  return (
    <div className="chat">
      <ChatHeader channelName="" />

      <div className="chat__messages">
        <Message />
        <Message />
        <Message />
        <Message />
      </div>
      <div className="chat__input">
        <AddCircleIcon fontSize="large" />
        <form>
          <input placeholder={`Message #TESTCHANNEL`} />
          <button className="chat__inputButton" type="submit">
            Send Message
          </button>
        </form>
        <div className="chat__inputIcons">
          <CardGiftcardIcon fontSize="large" />
          <GifIcon fontSize="large" />
          <EmojiEmotionsIcon fontSize="large" />
        </div>
      </div>
    </div>
  );
}

export default Chat;
