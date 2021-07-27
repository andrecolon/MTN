import React from "react";
import { useDispatch } from "react-redux";
import { setChannelInfo } from "./features/appSlice";
import "./SidebarChannel.css";

function SidebarChannel({ id, channelName }) {
  const dispatch = useDispatch();
  return (
    <div
      className="sidebarChannel"
      onClick={() =>
        dispatch(
          setChannelInfo({
            channelId: id,
            channelName: channelName,
          })
        )
      }
    >
      <h4>
        <span className="sidebarChannel__hash">#</span>
        {channelName}
        testing output for strings
      </h4>
      <p>Testing out component</p>
    </div>
  );
}

export default SidebarChannel;
