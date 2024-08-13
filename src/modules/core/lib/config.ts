const config = {
  webSockets: {
    appKey:
      process.env.NEXT_PUBLIC_PUSHER_KEY ?? "YOUR_NEXT_PUBLIC_PUSHER_KEY_HERE",
    cluster:
      process.env.NEXT_PUBLIC_PUSHER_CLUSTER ??
      "YOUR_NEXT_PUBLIC_PUSHER_CLUSTER_HERE",
  },
};

export { config };
