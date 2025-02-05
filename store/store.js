export const useStore = defineStore(
  "store",
  () => {
    let test = ref('test');

    return {
      test,
    };
  },
);