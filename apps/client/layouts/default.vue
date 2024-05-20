<template>
  <div ref="mainDom" class="main">
    <!-- <Navbar :style="bannerStyle"></Navbar> -->
    <ReactiveNavbar></ReactiveNavbar>
    <div class="content">
      <slot></slot>
    </div>
    <!-- <Footer></Footer> -->
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";

const mainDom = ref<any>(null);
const bannerStyle = ref({});
function handleScroll() {
  let scrollTop = mainDom.value?.scrollTop;
  if (scrollTop > 180) {
    bannerStyle.value = {
      backgroundColor: "#fff",
      color: "#3d99d4",
    };
  } else {
    bannerStyle.value = {
      backgroundColor: "transparent",
    };
  }
}

onMounted(() => {
  document.addEventListener("scroll", handleScroll, true);
});
</script>

<style scoped>
.main {
  width: 100%;
  height: 100vh;
  background-color: #fff;
  overflow-y: auto;
  overflow-x: hidden;
}

.content {
  background-color: #fff;
}
</style>
