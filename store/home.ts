import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", () => {
  const homeMsg = ref<string>("home info");
  return {
    homeMsg,
  };
});
