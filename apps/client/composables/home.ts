import { ref } from "vue";
import { useHomeStore } from "~/store/home";
import { fetchHomeMsg, type HomeMsg } from "~/api/home";

export function useHomeMessage() {
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

  onMounted(async () => {
    await getAPIMsg();
    // getHomeSse();
  });

  return {
    homeMsg,
    apiMsgs,
  };
}
