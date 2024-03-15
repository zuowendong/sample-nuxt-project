<template>
  <div>消息页：{{ $route.params.id }}</div>
</template>

<script setup lang="ts">
const { params } = useRoute();

console.log(params);
</script>
