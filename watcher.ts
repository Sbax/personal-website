import fs from "fs";
import WebSocket, { WebSocketServer } from "ws";

fs.watch(
  "src/content/posts",
  { persistent: true, recursive: true },
  async () => {
    clients.forEach((ws) => ws.send("refresh"));
  }
);

const wss = new WebSocketServer({ port: 3201 });

const clients = new Set<WebSocket>();

wss.on("connection", function connection(ws) {
  clients.add(ws);
  ws.on("error", console.error);
  ws.on("close", () => clients.delete(ws));
});
