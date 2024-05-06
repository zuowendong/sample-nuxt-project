import { ref } from "vue";
import { useHomeStore } from "~/store/home";
import {
  fetchHomeMsg,
  type HomeMsg,
  fetchAddOnline,
  fetchOnlineUsers,
} from "~/api/home";

export function useHomeMessage() {
  const onlineUsersCount = ref(0);

  const { homeMsg } = useHomeStore();

  const apiMsgs = ref<HomeMsg[]>([]);
  async function getAPIMsg() {
    apiMsgs.value = await fetchHomeMsg();
  }

  function getHomeSse() {
    const eventSource = new EventSource("http://localhost:3001/home/sse");
    eventSource.onmessage = ({ data }) => {
      console.log("message =>>>", data);
    };
  }

  async function addOnline() {
    const mockUserId = `${Math.random()}`;
    await fetchAddOnline(mockUserId);
  }

  async function getOnlineUsers() {
    const { count } = await fetchOnlineUsers();
    onlineUsersCount.value = count;
  }

  onMounted(async () => {
    await getAPIMsg();
    // getHomeSse();

    await getOnlineUsers();
  });

  return {
    homeMsg,
    apiMsgs,
    addOnline,
    onlineUsersCount,
  };
}
