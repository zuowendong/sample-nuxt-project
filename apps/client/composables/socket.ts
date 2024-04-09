import { io } from "socket.io-client";
import { onMounted } from "vue";
const socket = io("http://localhost:3001");

export function useSocket() {
  const message = ref("");
  const receivedMessages = ref<any>([]);
  const connected = ref(false);
  const onlineUser = ref<number>(0); // 当前房间的人数

  const createOrJoinRoom = (data: any) => {
    socket.emit("join", {
      roomId: data.roomId,
      name: data.name,
    });
  };

  const sendMessage = (data: any) => {
    socket.emit("newMessage", {
      message: message.value,
      roomId: data.roomId,
      name: data.name,
    });
    message.value = "";
  };

  const getOnlineUser = (roomId: string) => {
    socket.emit("getRoomUsers", { roomId });
  };

  const leave = (data: any) => {
    socket.emit("leave", {
      roomId: data.roomId,
      name: data.name,
    });
    getOnlineUser(data.roomId);
  };

  onMounted(() => {
    socket.on("join", (e) => {
      connected.value = true;
      const arr = { message: e, type: "join" };
      receivedMessages.value.push(arr);
    });
    socket.on("leave", (e) => {
      const arr = { message: e, type: "leave" };
      receivedMessages.value.push(arr);
    });
    socket.on("newMessage", (e) => {
      receivedMessages.value.push(e);
    });
    socket.on("getRoomUsers", (e) => {
      onlineUser.value = e;
    });
  });

  return {
    createOrJoinRoom,
    sendMessage,
    getOnlineUser,

    onlineUser,
  };
}
