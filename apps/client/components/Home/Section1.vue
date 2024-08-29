<template>
  <div class="w-full">
    <div
      class="w-full h-[100px] text-[50px] text-white leading-[100px] text-center fade-up"
      :class="{
        'aos-animate': isAnimation,
      }"
    >
      窗前明月光
    </div>

    <div
      class="w-full h-[100px] text-[30px] text-white leading-[100px] text-center fade-up-delay"
      :class="{
        'aos-animate': isAnimation,
      }"
    >
      疑是地上霜
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isAnimation: {
    type: Boolean,
    default: false,
  },
});
</script>

<style scoped>
.fade-up {
  opacity: 0;
  transform: translateY(150px); /* 调整初始位置，可以根据需要修改 */
  transition: all 1.5s ease-in-out;
}
.fade-up-delay {
  opacity: 0;
  transform: translateY(150px); /* 调整初始位置，可以根据需要修改 */
  transition: all 1.5s ease-in-out 0.3s;
}

.fade-up.aos-animate {
  opacity: 1;
  transform: translateY(0);
}
.fade-up-delay.aos-animate {
  opacity: 1;
  transform: translateY(0);
}
</style>
