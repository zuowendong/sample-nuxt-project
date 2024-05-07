import { ref } from "vue";
import { useHomeStore } from "~/store/home";
import {
  fetchHomeMsg,
  type HomeMsg,
  fetchAddOnline,
  fetchOnlineUsers,
  fetchDeleteOnline,
} from "~/api/home";

export function useHomeMessage() {
  const onlineUsersCount = ref(0);
  const onlineUsers = ref<string[]>([]);

  const { homeMsg } = useHomeStore();

  const apiMsgs = ref<HomeMsg[]>([]);
  async function getAPIMsg() {
    apiMsgs.value = await fetchHomeMsg();
  }

  function getHomeSse() {
    const eventSource = new EventSource("http://localhost:3001/home/sse");
    eventSource.onmessage = ({ data }) => {
      const onlineUsers = JSON.parse(data);
      onlineUsersCount.value = onlineUsers.count;
    };
  }

  async function addOnline() {
    const mockUserId = `${Math.random()}`;
    await fetchAddOnline(mockUserId);
  }
  async function deleteOnline(userId: string) {
    await fetchDeleteOnline(userId);
    await getOnlineUsers();
  }

  async function getOnlineUsers() {
    const res = await fetchOnlineUsers();
    onlineUsersCount.value = res.count;
    onlineUsers.value = res.list;
  }

  onMounted(async () => {
    await getAPIMsg();
    await getOnlineUsers();
    getHomeSse();
  });

  return {
    homeMsg,
    apiMsgs,
    addOnline,
    deleteOnline,

    onlineUsersCount,
    onlineUsers,
  };
}
