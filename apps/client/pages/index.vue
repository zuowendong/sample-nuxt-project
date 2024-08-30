<template>
  <div ref="homePageRef" class="w-full relative main page1">
    <section ref="section1Ref" class="w-full h-[calc(100vh_-_76px)]">
      <div
        class="w-full h-full flex flex-col justify-between bg-slate-300 text-white"
      >
        <span>SECTION1</span>
        <span>SECTION1</span>
      </div>
    </section>
    <section ref="section2Ref" class="w-full h-[calc(100vh_-_76px)]">
      <div
        class="w-full h-full flex flex-col justify-between bg-slate-700 text-white"
      >
        <span>SECTION2</span>
        <span>SECTION2</span>
      </div>
    </section>
    <section ref="section3Ref" class="w-full h-[calc(100vh_-_76px)]">
      <div
        class="w-full h-full flex flex-col justify-between bg-slate-300 text-white"
      >
        <span>SECTION3</span>
        <span>SECTION3</span>
      </div>
    </section>
    <section ref="section4Ref" class="w-full h-[calc(100vh_-_76px)]">
      <div
        class="w-full h-full flex flex-col justify-between bg-slate-700 text-white"
      >
        <span>SECTION4</span>
        <span>SECTION4</span>
      </div>
    </section>
    <section ref="section5Ref" class="w-full h-[calc(100vh_-_76px)]">
      <div
        class="w-full h-full flex flex-col justify-between bg-slate-300 text-white"
      >
        <span>SECTION5</span>
        <span>SECTION5</span>
      </div>
    </section>
    <section ref="footerRef" class="w-full h-[635px]">
      <footer
        class="w-full h-full bg-lime-600 flex flex-col justify-between text-white"
      >
        <span>footer</span>
        <span>footer</span>
      </footer>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const homePageRef = ref();

const section1Ref = ref();
const section2Ref = ref();
const section3Ref = ref();
const section4Ref = ref();
const section5Ref = ref();
const footerRef = ref();

onMounted(() => {
  // 禁用 scrollRestoration 功能  该功能旨在在页面刷新或导航后恢复之前的滚动位置
  window.history.scrollRestoration = "manual";

  section1Ref.value.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (event.deltaY < 0) {
    } else if (event.deltaY > 0) {
      homePageRef.value.classList.add("page2");
    }
    homePageRef.value.classList.remove("page1");
  });

  section2Ref.value.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (event.deltaY < 0) {
      homePageRef.value.classList.add("page1");
    } else if (event.deltaY > 0) {
      homePageRef.value.classList.add("page3");
    }
    homePageRef.value.classList.remove("page2");
  });

  section3Ref.value.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (event.deltaY < 0) {
      homePageRef.value.classList.add("page2");
    } else if (event.deltaY > 0) {
      homePageRef.value.classList.add("page4");
    }
    homePageRef.value.classList.remove("page3");
  });

  section4Ref.value.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (event.deltaY < 0) {
      homePageRef.value.classList.add("page3");
    } else if (event.deltaY > 0) {
      homePageRef.value.classList.add("page5");
    }
    homePageRef.value.classList.remove("page4");
  });

  section5Ref.value.addEventListener("wheel", wheelEvent);

  footerRef.value.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (event.deltaY < 0) {
      homePageRef.value.classList.add("page5");
      homePageRef.value.classList.remove("page6");
    } else if (event.deltaY > 0) {
    }
  });
});

const timer = ref();
function wheelEvent(event) {
  event.preventDefault();
  if (timer.value) clearTimeout(timer.value);
  timer.value = setTimeout(function () {
    var delta = 0;
    if (event.wheelDelta) {
      delta = -(event.wheelDelta / 120);
    }
    if (delta) {
      section5Wheel(delta);
    }
  }, 250);
}

function section5Wheel(deltaY) {
  if (deltaY < 0) {
    const list = Array.from(homePageRef.value.classList);
    if (list.includes("page6")) {
      homePageRef.value.classList.add("page5");
      homePageRef.value.classList.remove("page6");
    } else {
      homePageRef.value.classList.add("page4");
      homePageRef.value.classList.remove("page5");
    }
  } else if (deltaY > 0) {
    homePageRef.value.classList.add("page6");
    homePageRef.value.classList.remove("page5");
  }
}
</script>

<style scoped>
.main {
  transition: all 1s cubic-bezier(0.825, 0, 0.5, 1);
}

.page1 {
  transform: translateY(0px);
}
.page2 {
  transform: translateY(calc(-100vh + 76px));
}
.page3 {
  transform: translateY(calc(-200vh + 152px));
}
.page4 {
  transform: translateY(calc(-300vh + 228px));
}
.page5 {
  transform: translateY(calc(-400vh + 304px));
}
.page6 {
  transform: translateY(calc(-400vh - 331px));
}
</style>
