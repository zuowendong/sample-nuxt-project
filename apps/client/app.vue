<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { useNuxtApp } from "#app";

const { $aos } = useNuxtApp();
onMounted(() => {
  console.log(111111111, $aos);
  $aos().init({});
});

useSeoMeta({
  title: "my nuxt demo",
  description: "这是一个Nuxt3示例项目, 从0-1搭建",
  keywords: "Nuxt3,示例项目,Nest",
});
</script>
