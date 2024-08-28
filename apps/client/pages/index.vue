<template>
  <div class="main active1" id="main">
    <div
      class="absolute w-full h-full overflow-auto bg-red-400 page1"
      id="page1"
    >
      <div
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="1500"
        data-aos-once="true"
        class="w-full h-[500px] text-[50px] text-white leading-[500px] text-center"
      >
        666666
      </div>
      <div class="customPage" id="page1box">
        <p v-for="item in 40" :key="item">Page {{ item }}</p>
      </div>
    </div>
    <div class="absolute page bg-orange-400 page2" id="page2">
      <div
        class="w-full h-[500px] text-[50px] text-white leading-[500px] text-center fade-up"
        :class="{
          'fade-up': !isInPage2,
          'aos-animate': isInPage2,
        }"
      >
        666666
      </div>
    </div>
    <div class="absolute page bg-green-400 page3" id="page3">
      <p>Page 3</p>
    </div>
    <div class="absolute w-full bg-blue-400 page4" id="page4">
      <div class="w-full h-[500px] flex flex-col justify-between">
        <p>Page 4</p>
        <p>Page footer</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const isInPage2 = ref(false);

function throttle(func, delay) {
  let timeout;
  return function (...args) {
    if (timeout) return;
    timeout = setTimeout(() => {
      func(...args);
      timeout = null;
    }, delay);
  };
}

onMounted(() => {
  const page1Dom = document.getElementById("page1") as HTMLElement;
  const page1BoxDom = document.getElementById("page1box") as HTMLElement;
  const page2Dom = document.getElementById("page2") as HTMLElement;
  const page3Dom = document.getElementById("page3") as HTMLElement;
  const page4Dom = document.getElementById("page4") as HTMLElement;

  page1Dom?.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
      const a = page1BoxDom.getBoundingClientRect().bottom;
      const b = window.innerHeight;

      console.log("dom1向下滚动", event, a, b);

      if (a == b) {
        // page1Dom.style.top = "calc(-100vh + 76px)";
        page1Dom.classList.add("page1Active1");

        isInPage2.value = true;
        event.preventDefault();
      }
    } else if (event.deltaY < 0) {
      console.log("dom1向上滚动");
    }
  });

  page2Dom?.addEventListener(
    "wheel",
    throttle((event) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        console.log("dom2向下滚动", page2Dom.classList);

        // page2Dom.style.top = "calc(-100vh + 76px)";
        page2Dom.classList.add("page2Active1");
      } else if (event.deltaY < 0) {
        console.log(
          "dom2向上滚动",
          page2Dom.classList,
          page2Dom.offsetTop,
          window.innerHeight
        );

        const list = Array.from(page2Dom.classList);
        if (!list.includes("page2Active1")) {
          // page1Dom.style.top = "0";
          page1Dom.classList.remove("page1Active1");
        }
      }
    }, 500)
  );

  page3Dom?.addEventListener(
    "wheel",
    throttle((event) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        console.log("dom3向下滚动");

        // page3Dom.style.top = "-500px";
        page3Dom.classList.add("page3Active1");
      } else if (event.deltaY < 0) {
        console.log("dom3向上滚动", page3Dom.offsetTop);

        if (Math.abs(page3Dom.offsetTop) == 500) {
          // page3Dom.style.top = "0";
          page3Dom.classList.remove("page3Active1");
        } else {
          // page2Dom.style.top = "0";
          page2Dom.classList.remove("page2Active1");
        }
      }
    }, 500)
  );

  page4Dom?.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      console.log("dom4向下滚动");
    } else if (event.deltaY < 0) {
      console.log("dom4向上滚动");
      // page3Dom.style.top = "0";
      page3Dom.classList.remove("page3Active1");
    }
  });
});
</script>

<style scoped>
.main {
  width: 100vw;
  height: 100%;
  position: relative;
  transition: all 1s cubic-bezier(0.825, 0, 0.5, 1);
  overflow: hidden;
}

.page1 {
  z-index: 30;
  top: 0;
  transition: all 1s ease;
}
.page1.page1Active1 {
  top: calc(-100vh + 76px) !important;
}

.page2 {
  z-index: 20;
  top: 0;
  transition: all 1s ease;
}
.page2.page2Active1 {
  top: calc(-100vh + 76px) !important;
}
.page3 {
  z-index: 10;
  top: 0;
  transition: all 1s ease;
}
.page3.page3Active1 {
  top: -500px !important;
}
.page4 {
  z-index: 1;
  top: calc(100vh - 500px - 76px);
  transition: all 1s ease;
}

.customPage {
  width: 100%;
  /* height: 2000px; */
}

.page {
  width: 100%;
  height: calc(100vh - 76px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.fade-up {
  opacity: 0;
  transform: translateY(100px); /* 调整初始位置，可以根据需要修改 */
  transition: all 1.5s ease-in-out;
  transition-delay: 300ms;
}

.fade-up.aos-animate {
  opacity: 1;
  transform: translateY(0);
}
</style>
