import { io } from "socket.io-client";

export function useSocket() {
  const socket = io("http://localhost:3001");
  socket.on("connect", function () {
    console.log("Connected");

    socket.emit("events", { test: "test" });
    socket.emit("identity", 0, (response: any) =>
      console.log("Identity:", response)
    );
  });
  socket.on("events", function (data: any) {
    console.log("---event---", data);
  });
  socket.on("identity", function (data: any) {
    console.log("---identity---", data);
  });
  socket.on("disconnect", function () {
    console.log("Disconnected");
  });
}
