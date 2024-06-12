<template>
  <div ref="containerRef">
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const containerRef = ref<HTMLElement | null>(null);
const prevRatio = ref(0);

function createObserver() {
  const observer = new IntersectionObserver(handleIntersect, {
    root: null,
    rootMargin: "0px",
    threshold: [],
  });
  observer.observe(containerRef.value!);
}

onMounted(() => {
  if (containerRef.value) {
    createObserver();
  }
});

function handleIntersect(entries: IntersectionObserverEntry[]) {
  entries.forEach((entry) => {
    console.log(
      "intersectionRatio==>",
      entry.intersectionRatio,
      "prevRatio==>",
      prevRatio.value
    );

    if (entry.intersectionRatio > prevRatio.value) {
      (entry.target as HTMLElement).classList.add("container-an");
    } else {
      (entry.target as HTMLElement).classList.remove("container-an");
    }

    prevRatio.value = entry.intersectionRatio;
  });
}
</script>
