<template>
  <section class="block">
    <div id="main" class="home-pc active1">
      <div class="page page1" id="page1">
        <div class="h-[3379.69px] bg-orange-300">
          <div
            v-for="item in 100"
            :key="item"
            class="text-black flex items-center justify-center text-[18px] w-full"
          >
            {{ item }}
          </div>
        </div>
      </div>
      <div class="page page2" id="page2">
        <div class="index-add1 bg-slate-600">
          <div
            class="w-full h-full flex items-center justify-center text-[50px] text-white"
          >
            SECTION 2
          </div>
        </div>
      </div>
      <div class="page page3" id="page3">
        <div class="index-add1 bg-orange-400">
          <div
            class="w-full h-full flex items-center justify-center text-[50px] text-white"
          >
            SECTION 3
          </div>
        </div>
      </div>
      <div class="page page4" id="page4">
        <div class="index-add1 bg-red-500">
          <div
            class="w-full h-full flex items-center justify-center text-[50px] text-white"
          >
            SECTION 4
          </div>
        </div>
      </div>

      <div class="page page5" id="page5">
        <Footer></Footer>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
onMounted(() => {
  const mainDom = document.getElementById("main") as HTMLElement;
  const page1Dom = document.getElementById("page1") as HTMLElement;
  const page2Dom = document.getElementById("page2") as HTMLElement;
  const page3Dom = document.getElementById("page3");
  const page4Dom = document.getElementById("page4");
  const page5Dom = document.getElementById("page5");

  page1Dom?.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
      console.log("dom1向下滚动");
      console.log(11111111, page1Dom.getBoundingClientRect().bottom);
      console.log(22222222, window.innerHeight);
      const a = page1Dom.getBoundingClientRect().bottom;
      const b = window.innerHeight;
      console.log(333333, Math.abs(a - b));
      if (Math.abs(a - b) < 1) {
        mainDom?.classList.remove("active1");
        mainDom?.classList.add("active2");
      }
    } else if (event.deltaY < 0) {
      console.log("dom1向上滚动");
      // mainDom?.classList.remove("active2");
      // mainDom?.classList.add("active1");
    }
  });
  page2Dom?.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      console.log("dom2向下滚动");
      mainDom?.classList.remove("active2");
      mainDom?.classList.add("active3");
    } else if (event.deltaY < 0) {
      console.log("dom2向上滚动");
      mainDom?.classList.remove("active2");
      mainDom?.classList.add("active1");
    }
  });
  page3Dom?.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      console.log("dom3向下滚动");
      console.log(1111111, page3Dom.getBoundingClientRect());
      mainDom?.classList.remove("active3");
      mainDom?.classList.add("active4");
    } else if (event.deltaY < 0) {
      console.log("dom3向上滚动", event);
      console.log(2222222, page3Dom.getBoundingClientRect());

      mainDom?.classList.remove("active3");
      mainDom?.classList.add("active2");
    }
  });
  page4Dom?.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      console.log("dom4向下滚动");

      mainDom?.classList.remove("active4");
      mainDom?.classList.add("active5");
    } else if (event.deltaY < 0) {
      console.log("dom4向上滚动", page4Dom.getBoundingClientRect().top);

      mainDom?.classList.remove("active4");
      mainDom?.classList.add("active3");

      // if (page4Dom.getBoundingClientRect().top <= 76) {
      //   mainDom?.classList.remove("active4");
      //   mainDom?.classList.add("active3");
      // }
    }
  });
  page5Dom?.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      console.log("dom5向下滚动");
    } else if (event.deltaY < 0) {
      console.log("dom5向上滚动");

      mainDom?.classList.remove("active5");
      mainDom?.classList.add("active4");

      // if (page4Dom.getBoundingClientRect().top <= 76) {
      //   mainDom?.classList.remove("active4");
      //   mainDom?.classList.add("active3");
      // }
    }
  });
});
</script>

<style scoped>
.home-pc .page1 {
  transition: all 1s cubic-bezier(0.825, 0, 0.5, 1);
}

.home-pc .page2 {
  transition: all 1s cubic-bezier(0.825, 0, 0.5, 1);
  overflow: hidden;
}
.home-pc .page3 {
  transition: all 1s cubic-bezier(0.825, 0, 0.5, 1);
  overflow: hidden;
}
.home-pc .page4 {
  transition: all 1s cubic-bezier(0.825, 0, 0.5, 1);
  overflow: hidden;
}
.home-pc .page5 {
  transition: all 1s cubic-bezier(0.825, 0, 0.5, 1);
  overflow: hidden;
}

.home-pc.active1 .page1 {
  margin-top: 0;
}
.home-pc.active1 .page2 {
  max-height: 0;
  overflow: hidden;
}
.home-pc.active1 .page3 {
  max-height: 0;
  overflow: hidden;
}
.home-pc.active1 .page4 {
  max-height: 0;
  overflow: hidden;
}
.home-pc.active1 .page5 {
  max-height: 0;
  overflow: hidden;
}

.home-pc.active2 .page1 {
  margin-top: calc(-100vh + 76px);
}
.home-pc.active2 .page2 {
  margin-top: 0;
  max-height: 100vh;
}
.home-pc.active2 .page3 {
  max-height: 0;
  overflow: hidden;
}
.home-pc.active2 .page4 {
  max-height: 0;
  overflow: hidden;
}
.home-pc.active2 .page5 {
  max-height: 0;
  overflow: hidden;
}

.home-pc.active3 .page1 {
  margin-top: calc(-100vh + 76px);
}
.home-pc.active3 .page2 {
  margin-top: calc(-100vh + 76px);
  max-height: 100vh;
}
.home-pc.active3 .page3 {
  max-height: 100vh;
}
.home-pc.active3 .page4 {
  max-height: 0;
  overflow: hidden;
}
.home-pc.active3 .page5 {
  max-height: 0;
  overflow: hidden;
}

.home-pc.active4 .page1 {
  margin-top: calc(-100vh + 76px);
}
.home-pc.active4 .page2 {
  margin-top: calc(-100vh + 76px);
  max-height: 100vh;
}
.home-pc.active4 .page3 {
  margin-top: calc(-100vh + 76px);
  max-height: 100vh;
}
.home-pc.active4 .page4 {
  max-height: 100vh;
}
.home-pc.active4 .page5 {
  max-height: 0;
  overflow: hidden;
}

.home-pc.active5 .page1 {
  margin-top: calc(-100vh + 76px);
}
.home-pc.active5 .page2 {
  margin-top: calc(-100vh + 76px);
  max-height: 100vh;
}
.home-pc.active5 .page3 {
  margin-top: calc(-100vh + 76px);
  max-height: 100vh;
}
.home-pc.active5 .page4 {
  margin-top: calc(-644px + 76px);
  max-height: 100vh;
}
.home-pc.active4 .page5 {
  max-height: 644px;
}

.index-add1 {
  position: relative;
  height: calc(100vh - 76px);
  overflow: hidden;
}
</style>
