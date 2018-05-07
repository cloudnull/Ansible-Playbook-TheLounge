"use strict";

module.exports = {
  public: false,
  host: undefined,
  port: 8443,
  bind: undefined,
  reverseProxy: false,
  theme: "default",
  prefetch: true,
  prefetchStorage: true,
  prefetchMaxImageSize: 2048,
  displayNetwork: true,
  lockNetwork: false,
  useHexIp: false,
  webirc: null,
  messageStorage: ["sqlite", "text"],
  logs: {
    format: "YYYY-MM-DD HH:mm:ss",
    timezone: "UTC+00:00",
  },
  maxHistory: 10000,
  defaults: {},
  transports: ["polling", "websocket"],
  https: {
    enable: true,
    key: "/var/lib/thelounge/sslcert/privkey.pem",
    certificate: "/var/lib/thelounge/sslcert/cert.pem",
    ca: "/var/lib/thelounge/sslcert/fullchain.pem",
  },
  leaveMessage: "The Lounge - https://thelounge.chat",
};
