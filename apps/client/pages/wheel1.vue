<template>
  <div class="main active1" id="main">
    <div
      class="absolute w-full h-full overflow-auto bg-red-400 page1In"
      id="page1In"
    >
      <div
        data-aos="fade-up"
        data-aos-offset="0"
        data-aos-duration="1500"
        data-aos-once="true"
        class="w-full h-[635px] text-[50px] text-white leading-[635px] text-center"
      >
        666666
      </div>
      <div class="customPage" id="page1box">
        <p v-for="item in 40" :key="item">Page {{ item }}</p>
      </div>
    </div>
    <div class="absolute page bg-orange-400 page2Bottom" id="page2Bottom">
      <div
        class="w-full h-[635px] text-[50px] text-white leading-[635px] text-center fade-up"
        :class="{
          'fade-up': !isInPage2,
          'aos-animate': isInPage2,
        }"
      >
        666666
      </div>

      <HomeSection1 :is-animation="isInPage2"></HomeSection1>
    </div>
    <div class="absolute page bg-green-400 page3Bottom" id="page3Bottom">
      <p>Page 3</p>
    </div>
    <div class="absolute page bg-gray-400 page4Bottom" id="page4Bottom">
      <p>Page 4</p>
    </div>
    <div class="absolute w-full bg-blue-400 page5Bottom" id="page5Bottom">
      <div class="w-full h-[635px] flex flex-col justify-between">
        <p>Page 5</p>
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
  const page1Dom = document.getElementById("page1In") as HTMLElement;
  const page1BoxDom = document.getElementById("page1box") as HTMLElement;
  const page2Dom = document.getElementById("page2Bottom") as HTMLElement;
  const page3Dom = document.getElementById("page3Bottom") as HTMLElement;
  const page4Dom = document.getElementById("page4Bottom") as HTMLElement;
  const page5Dom = document.getElementById("page5Bottom") as HTMLElement;

  page1Dom?.addEventListener("wheel", (event) => {
    if (event.deltaY > 0) {
      const a = page1BoxDom.getBoundingClientRect().bottom;
      const b = window.innerHeight;

      console.log("dom1向下滚动", event, a, b);

      if (a == b) {
        // page1Dom.style.top = "calc(-100vh + 76px)";
        // page1In 移上去
        page1Dom.classList.add("page1Top");

        // page2Bottom 移到视口
        page2Dom.classList.add("page2In");

        isInPage2.value = true;
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

        const list = Array.from(page2Dom.classList);

        /**
         * 如果page2在视口，这时候向下滚动，在操作向上滚动是禁止的
         *
         * list.includes("page2In") ： 说明 page2Bottom 在视口
         *
         */

        if (list.includes("page2In")) {
          // page2Bottom 移上去
          page2Dom.classList.add("page2Top");

          // page3Bottom 移动到视口
          page3Dom.classList.add("page3In");
        }
      } else if (event.deltaY < 0) {
        console.log(
          "dom2向上滚动",
          page2Dom.classList,
          page2Dom.offsetTop,
          window.innerHeight
        );

        /**
         * 向上滚动 又 下拉滚动
         *
         * page2向上滚动，此时page2即将进入底部，page1来到视口
         * page2 classList 没有 page2Top
         */

        const list = Array.from(page2Dom.classList);
        if (!list.includes("page2Top")) {
          page1Dom.classList.remove("page1Top");
          page2Dom.classList.remove("page2In");
        }
      }
    }, 500)
  );

  page3Dom?.addEventListener(
    "wheel",
    throttle((event) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        console.log("dom3向下滚动", page3Dom.classList);

        // page3Dom.style.top = "calc(-100vh + 76px)";

        const list = Array.from(page3Dom.classList);
        if (list.includes("page3In")) {
          // page3Bottom 移上去
          page3Dom.classList.add("page3Top");

          // page4Bottom 移到视口
          page4Dom.classList.add("page4In");
        }
      } else if (event.deltaY < 0) {
        console.log(
          "dom3向上滚动",
          page3Dom.classList,
          page3Dom.offsetTop,
          window.innerHeight
        );

        // const list = Array.from(page3Dom.classList);
        // if (!list.includes("page3In")) {
        //   // page1Dom.style.top = "0";
        //   page2Dom.classList.remove("page2In");
        // }

        const list = Array.from(page3Dom.classList);
        if (!list.includes("page3Top")) {
          page2Dom.classList.remove("page2Top");
          page3Dom.classList.remove("page3In");
        }
      }
    }, 500)
  );

  page4Dom?.addEventListener(
    "wheel",
    throttle((event) => {
      event.preventDefault();
      if (event.deltaY > 0) {
        console.log("dom4向下滚动");

        const list = Array.from(page4Dom.classList);
        if (list.includes("page4In")) {
          // page4Dom.style.top = "-635px";
          // page4Bottom 移上去，但是不能全上去
          page4Dom.classList.add("page4Top");

          // page5Bottom 不足一屏高度出现在视口
          page5Dom.classList.add("page5In");
        }
      } else if (event.deltaY < 0) {
        console.log(
          "dom4向上滚动",
          page4Dom.offsetTop,
          page5Dom.getBoundingClientRect().height
        );

        if (
          Math.abs(page4Dom.offsetTop) ==
          page5Dom.getBoundingClientRect().height
        ) {
          // page3Dom.style.top = "0";
          page4Dom.classList.remove("page4Top");
          page5Dom.classList.remove("page5In");
        } else {
          // page3Dom.style.top = "0";

          const list = Array.from(page4Dom.classList);
          if (!list.includes("page4Top")) {
            page3Dom.classList.remove("page3Top");
            page4Dom.classList.remove("page4In");
          }
        }
      }
    }, 500)
  );

  page5Dom?.addEventListener("wheel", (event) => {
    event.preventDefault();
    if (event.deltaY > 0) {
      console.log("dom5向下滚动");
    } else if (event.deltaY < 0) {
      console.log("dom5向上滚动");
      // page4Dom.style.top = "0";
      page5Dom.classList.remove("page5In");
      page4Dom.classList.remove("page4Top");
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

.page1In {
  z-index: 30;
  transition: all 1s ease;
  transform: translateY(0);
}
.page1In.page1Top {
  transform: translateY(calc(-100vh + 76px));
}

.page2Bottom {
  z-index: 20;
  transition: all 1s ease;
  /* top: calc(100vh - 76px); */
  transform: translateY(calc(100vh - 76px));
}
.page2Bottom.page2In {
  /* top: 0 !important; */
  transform: translateY(0);
}
.page2Bottom.page2Top {
  /* top: calc(-100vh + 76px) !important; */
  transform: translateY(calc(-100vh + 76px));
}
.page3Bottom {
  z-index: 20;
  transition: all 1s ease;
  /* top: calc(100vh - 76px); */
  transform: translateY(calc(100vh - 76px));
}
.page3Bottom.page3In {
  /* top: 0 !important; */
  transform: translateY(0);
}
.page3Bottom.page3Top {
  /* top: calc(-100vh + 76px) !important; */
  transform: translateY(calc(-100vh + 76px));
}

.page4Bottom {
  z-index: 10;
  transition: all 1s ease;
  /* transform: translateY(calc(100vh - 76px)); */
  top: calc(100vh - 76px);
}
.page4Bottom.page4In {
  /* transform: translateY(0); */
  top: 0;
}
.page4Bottom.page4Top {
  /* transform: translateY(-635px); */
  top: -635px;
}
.page5Bottom {
  z-index: 1;
  transition: all 1s ease;
  transform: translateY(calc(100vh - 76px));
}
.page5Bottom.page5In {
  transform: translateY(calc(100vh - 635px - 76px));
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
