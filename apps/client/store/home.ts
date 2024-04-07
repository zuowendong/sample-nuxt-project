import { defineStore } from "pinia";

export const useHomeStore = defineStore("home", () => {
  const homeMsg = ref<string>("home page");
  return {
    homeMsg,
  };
});
