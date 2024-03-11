<template>
  <div>{{ homeMsg }}</div>
</template>

<script setup lang="ts">
import { useHomeStore } from '~/store/home';
const { homeMsg } = useHomeStore()
</script>
