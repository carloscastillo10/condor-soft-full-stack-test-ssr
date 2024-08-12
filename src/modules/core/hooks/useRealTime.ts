import { useEffect } from "react";
import { socketClient } from "../lib/websocketsClient";

const useRealTime = ({
  channelName,
  eventName,
  callback,
}: {
  channelName: string;
  eventName: string;
  callback: (data: unknown) => void;
}) => {
  useEffect(() => {
    const channel = socketClient.subscribe(channelName);
    console.log(channel)

    channel.bind(eventName, callback);

    return () => {
      channel.unbind_all();
      socketClient.unsubscribe(channelName);
    };
  }, [channelName, eventName, callback]);
};

export { useRealTime };
