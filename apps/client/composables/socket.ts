import io from "socket.io-client";
import { onMounted, onUnmounted, ref } from "vue";

import { isProd } from "~/utils/env";

const ws = isProd() ? "ws://localhost:3002" : "ws://localhost:3001";

function useSocket(userId: string) {
  const socket = io(ws, {
    transportOptions: {
      polling: {
        extraHeaders: {
          "User-Id": userId,
        },
      },
    },
  });
  return {
    socket,
  };
}

export function useOnline() {
  const onlineUserCount = ref(0);

  const userId = `${Math.random()}`;
  const { socket } = useSocket(userId);

  function watchOnlineUsers() {
    socket.on("onlineUsers", (count: number) => {
      onlineUserCount.value = count;
    });
  }

  const leaveGame = () => socket.close();

  return {
    userId,
    onlineUserCount,
    watchOnlineUsers,
    leaveGame,
  };
}
