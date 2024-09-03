<template>
  <div ref="homePageRef" class="w-full relative touch-none main page1">
    <section ref="section1Ref" class="w-full h-[calc(100vh_-_76px)]">
      <div
        class="w-full h-full flex flex-col justify-between bg-slate-300 text-white text-2xl font-medium"
      >
        <span>SECTION1</span>
        <span>SECTION1</span>
      </div>
    </section>
    <section ref="section2Ref" class="w-full h-[calc(100vh_-_76px)]">
      <div
        class="w-full h-full flex flex-col justify-between bg-slate-700 text-white text-2xl font-medium"
      >
        <span>SECTION2</span>
        <span>SECTION2</span>
      </div>
    </section>
    <section ref="section3Ref" class="w-full h-[calc(100vh_-_76px)]">
      <div
        class="w-full h-full flex flex-col justify-between bg-slate-300 text-white text-2xl font-medium"
      >
        <span>SECTION3</span>
        <span>SECTION3</span>
      </div>
    </section>
    <section ref="section4Ref" class="w-full h-[calc(100vh_-_76px)]">
      <div
        class="w-full h-full flex flex-col justify-between bg-slate-700 text-white text-2xl font-medium"
      >
        <span>SECTION4</span>
        <span>SECTION4</span>
      </div>
    </section>
    <section ref="section5Ref" class="w-full h-[calc(100vh_-_76px)]">
      <div
        class="w-full h-full flex flex-col justify-between bg-slate-300 text-white text-2xl font-medium"
      >
        <span>SECTION5</span>
        <span>SECTION5</span>
      </div>
    </section>
    <section ref="footerRef" class="w-full h-[635px]">
      <footer
        class="w-full h-full bg-lime-600 flex flex-col justify-between text-white text-2xl font-medium"
      >
        <span>footer</span>
        <span>footer</span>
      </footer>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const homePageRef = ref<HTMLElement | null>(null);

const section1Ref = ref<HTMLElement | null>(null);
const section2Ref = ref<HTMLElement | null>(null);
const section3Ref = ref<HTMLElement | null>(null);
const section4Ref = ref<HTMLElement | null>(null);
const section5Ref = ref<HTMLElement | null>(null);
const footerRef = ref<HTMLElement | null>(null);

function section1Wheel(deltaY: number) {
  if (deltaY > 0) {
    homePageRef.value?.classList.add("page2");
  }
  homePageRef.value?.classList.remove("page1");
}

function section2Wheel(deltaY: number) {
  if (deltaY < 0) {
    homePageRef.value?.classList.add("page1");
  } else if (deltaY > 0) {
    homePageRef.value?.classList.add("page3");
  }
  homePageRef.value?.classList.remove("page2");
}

function section3Wheel(deltaY: number) {
  if (deltaY < 0) {
    homePageRef.value?.classList.add("page2");
  } else if (deltaY > 0) {
    homePageRef.value?.classList.add("page4");
  }
  homePageRef.value?.classList.remove("page3");
}

function section4Wheel(deltaY: number) {
  if (deltaY < 0) {
    homePageRef.value?.classList.add("page3");
  } else if (deltaY > 0) {
    homePageRef.value?.classList.add("page5");
  }
  homePageRef.value?.classList.remove("page4");
}

function footerWheel(deltaY: number) {
  if (deltaY < 0) {
    homePageRef.value?.classList.add("page5");
    homePageRef.value?.classList.remove("page6");
  }
}

function sectionWheel(dom: HTMLElement | null, callback: Function) {
  if (dom) {
    dom.addEventListener("wheel", (event: WheelEvent) => {
      event.preventDefault();
      callback(event.deltaY);
    });
  }
}
function sectionTouch(dom: HTMLElement | null, callback: Function) {
  let touchStartNum = 0;
  let touchEndNum = 0;
  dom?.addEventListener("touchstart", (event: TouchEvent) => {
    event.preventDefault();
    touchStartNum = event.touches[0].clientY;
  });
  dom?.addEventListener("touchmove", (event: TouchEvent) => {
    event.preventDefault();
    touchEndNum = event.touches[0].clientY;
    callback(touchStartNum - touchEndNum);

    touchStartNum = 0;
    touchEndNum = 0;
  });
}

onMounted(() => {
  // 禁用 scrollRestoration 功能  该功能旨在在页面刷新或导航后恢复之前的滚动位置
  window.history.scrollRestoration = "manual";

  sectionWheel(section1Ref.value, section1Wheel);
  sectionTouch(section1Ref.value, section1Wheel);

  sectionWheel(section2Ref.value, section2Wheel);
  sectionTouch(section2Ref.value, section2Wheel);

  sectionWheel(section3Ref.value, section3Wheel);
  sectionTouch(section3Ref.value, section3Wheel);

  sectionWheel(section4Ref.value, section4Wheel);
  sectionTouch(section4Ref.value, section4Wheel);

  section5Ref.value?.addEventListener("wheel", wheelEvent);
  sectionTouch(section5Ref.value, section5Wheel);

  sectionWheel(footerRef.value, footerWheel);
  sectionTouch(footerRef.value, footerWheel);
});

const timer = ref();
function wheelEvent(event: WheelEvent) {
  event.preventDefault();
  if (timer.value) clearTimeout(timer.value);
  timer.value = setTimeout(function () {
    var delta = 0;
    // @ts-ignore
    if (event.wheelDelta) {
      // @ts-ignore
      delta = -(event.wheelDelta / 120);
    }
    if (delta) {
      section5Wheel(delta);
    }
  }, 250);
}

function section5Wheel(deltaY: number) {
  if (deltaY < 0) {
    const list = Array.from(homePageRef.value?.classList || []);
    if (list.includes("page6")) {
      homePageRef.value?.classList.add("page5");
      homePageRef.value?.classList.remove("page6");
    } else {
      homePageRef.value?.classList.add("page4");
      homePageRef.value?.classList.remove("page5");
    }
  } else if (deltaY > 0) {
    homePageRef.value?.classList.add("page6");
    homePageRef.value?.classList.remove("page5");
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
