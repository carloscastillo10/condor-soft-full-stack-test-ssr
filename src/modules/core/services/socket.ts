import { socket } from "~/server/websockets";
import { type Trigger } from "../types";

const emit = async ({ channel, event, data }: Trigger) => {
  await socket.trigger(channel, event, data);
};

export { emit };
