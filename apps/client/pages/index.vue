<template>
  <div class="w-full">
    <p>当前为：{{ envInfo }}</p>

    <div>
      <button class="btn" @click="addOnline">添加在线人数</button>
      <span>在线人数：{{ onlineUsersCount }}</span>

      <div>msg from store: {{ homeMsg }}</div>
      <div>
        <h1>msg from api:</h1>
        <div v-for="item in apiMsgs" :index="item.xid">
          <NuxtLink :href="`/message/${item.xid}`">
            <span>{{ item.name }}</span>
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- <div class="md:min-h-screen flex items-center relative py-[125px] overflow-hidden text-white bg-[#00263e]">
      <div class="w-screen absolute top-0 left-0 bottom-0 min-h-[220px] overflow-hidden transition-all">
        <div class="w-full h-full absolute top-0 left-0 ">
          <img src="https://ik.imagekit.io/seitz/media/seitz-h2_keyvisual.jpg?tr=ar-16-9,w-3000,fo-center" alt="Flowers"
            style="width:auto;">
        </div>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useHomeMessage } from "~/composables/home";
import { isProd } from "~/utils/env";

const { homeMsg, apiMsgs, addOnline, onlineUsersCount } = useHomeMessage();

const envInfo = computed(() => (isProd() ? "生成环境" : "开发环境"));
</script>

<style scoped>
.mask::before {
  content: "";
  display: block;
  position: absolute;
  width: 768px;
  height: 768px;
  right: 0px;
  bottom: 0px;
  background-color: #fff;
  clip-path: polygon(100% 40%, 100% 100%, 0% 100%);
  z-index: 2;
  transform: translate(1px, 1px);
}

.mask::after {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  background-color: #00263e;
  opacity: 0.7;
  z-index: 1;
  width: 100%;
  height: 100%;
}
</style>
