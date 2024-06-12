<template>
  <main class="flex items-center justify-center">
    <div id="gjs"></div>
  </main>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import grapesjs from "grapesjs";
// import "grapesjs/dist/css/grapes.min.css";
// import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.css";
// import "grapesjs-preset-webpage/dist/grapesjs-preset-webpage.min.js";

function init() {
  const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: "#gjs",
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    // Size of the editor
    height: "300px",
    width: "500px",
    // Disable the storage manager for the moment
    // Avoid any default panel
    panels: { defaults: [] },
  });
}
onMounted(() => {
  init();
});
</script>

<style scoped></style>
