<template>
  <main class="flex flex-col items-center">
    <div class="w-28 h-96 bg-black"></div>
    <div class="w-28 h-96 bg-black"></div>
    <div class="w-28 h-96 bg-black"></div>
    <Container>
      <div class="w-28 h-28 bg-white container-child"></div>
      <div class="w-28 h-28 bg-white container-child1"></div>
      <div class="w-28 container-child2">滚动动画展示demo页面</div>
    </Container>
    <div class="w-28 h-96 bg-black"></div>
    <div class="w-28 h-96 bg-black"></div>
    <div class="w-28 h-96 bg-black"></div>
    <div class="w-28 h-96 bg-black"></div>
  </main>
</template>

<script setup lang="ts">
import Container from "../components/Container.vue";
</script>

<style scoped>
.container-an {
  .container-child {
    animation: scale-up-center 0.4s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  }
  .container-child1 {
    background-color: rgba(218, 218, 66, 0.808);
    animation: slide-in-left 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }
  .container-child2 {
    background-color: rgba(6, 235, 216, 0.808);
    animation: bounce-in-right 1.1s both;
  }
}

/* https://animista.net/play */

@keyframes scale-up-center {
  0% {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
    background-color: rgba(143, 19, 19, 0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    background-color: rgba(143, 19, 19, 0.7);
  }
}

@keyframes slide-in-left {
  0% {
    -webkit-transform: translateX(-1000px);
    transform: translateX(-1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    opacity: 1;
  }
}

@keyframes bounce-in-right {
  0% {
    -webkit-transform: translateX(600px);
    transform: translateX(600px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
    opacity: 0;
  }
  38% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
    opacity: 1;
  }
  55% {
    -webkit-transform: translateX(68px);
    transform: translateX(68px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  72% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  81% {
    -webkit-transform: translateX(32px);
    transform: translateX(32px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  90% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
  95% {
    -webkit-transform: translateX(8px);
    transform: translateX(8px);
    -webkit-animation-timing-function: ease-in;
    animation-timing-function: ease-in;
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
    -webkit-animation-timing-function: ease-out;
    animation-timing-function: ease-out;
  }
}
</style>
