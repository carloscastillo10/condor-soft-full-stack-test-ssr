import Pusher from "pusher-js";
import { config } from "./config";

const { webSockets } = config;

export const socketClient = new Pusher(webSockets.appKey, {
  cluster: webSockets.cluster,
});
