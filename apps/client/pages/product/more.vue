<template>
  <div class="chatRoom content-box">
    <ChatRoom :state="state" @changeRoom="changeRoom"></ChatRoom>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import ChatRoom from "~/components/ChatRoom.vue";

const state = reactive({
  name: `${Math.random() * 100}`,
  roomId: 1,
  type: "",
});
const changeRoom = (newInfo: any) => {
  state.name = newInfo.name;
  state.roomId = newInfo.roomId;
  state.type = newInfo.type;
};
</script>

<style scoped>
.chatRoom {
  height: auto;
}
</style>
