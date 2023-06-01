import { defineStore } from "pinia";

export const useCount = defineStore("todos", {
  state: () => ({
    count: null,
  }),
  actions: {
    setCountValue(count) {
      this.count = count;
    },
  },
});
