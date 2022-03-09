<template>
  <!-- layer popup -->
  <div
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-md rounded-md bg-white shadow-lg overflow-hidden z-20"
  >
    <!-- title -->
    <div
      class="py-5 px-6 flex items-center justify-between border-b-4 border-gray-200 bg-gray-100 font-bold text-black"
    >
      <h2>추가</h2>
      <div class="flex">
        <button
          type="button"
          class="px-2 text-lg text-black"
          @click="hideLayer"
        >
          X
        </button>
      </div>
    </div>
    <!-- form -->
    <form class="p-6 gap-4 flex flex-1 flex-col whitespace-nowrap">
      <div class="flex items-center">
        <label for="datepicker-date" class="w-1/5 text-sm">
          부킹날짜
        </label>
        <input
          id="datepicker-date"
          type="text"
          class="p-1 mx-2 flex-1 border border-slate-900 rounded-md"
        />
      </div>
      <div class="flex items-center">
        <label for="datepicker-time-start" class="w-1/5 text-sm">
          시작시간
        </label>
        <input
          id="datepicker-time-start"
          type="text"
          class="p-1 mx-2 flex-1 border border-slate-900 rounded-md"
        />
      </div>
      <div class="flex items-center">
        <label for="datepicker-time-end" class="w-1/5 text-sm">
          마감시간
        </label>
        <input
          id="datepicker-time-end"
          type="text"
          class="p-1 mx-2 flex-1 border border-slate-900 rounded-md"
        />
      </div>
      <div class="flex items-center">
        <label for="course" class="w-1/5 text-sm">
          코스
        </label>
        <select id="course">
          전체 선택
        </select>
      </div>
      <!-- save -->
      <button
        type="submit"
        class="py-3 w-full font-bold text-white rounded-sm bg-at-light-blue"
      >
        저장
      </button>
    </form>
  </div>
  <!-- DIM -->
  <div class="fixed inset-0 w-full h-full bg-black opacity-75 z-10"></div>
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";

export default {
  name: "LayerPopUp",
  emits: ["hideLayer"],
  setup(props, { emit }) {
    const state = reactive({});

    const hideLayer = () => {
      emit("hideLayer", false);
    };

    return {
      ...toRefs(state),
      hideLayer,
    };
  },
};
</script>
