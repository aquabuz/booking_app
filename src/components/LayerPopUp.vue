<template>
  <!-- layer popup -->
  <div
    class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-md rounded-md bg-white shadow-lg z-20"
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
          <x-icon class="h-6 w-6 text-black" />
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
          class="p-1 mx-2 border border-slate-900 rounded-md bg-white"
          placeholder="Select Date"
          type="date"
        />
      </div>
      <div class="flex items-center">
        <label for="datepicker-time-start" class="w-1/5 text-sm">
          시작시간
        </label>
        <input
          id="datepicker-time-start"
          class="p-1 mx-2 border border-slate-900 rounded-md bg-white"
          type="time"
          min="00:00"
          max="24:00"
        />
      </div>
      <div class="flex items-center">
        <label for="datepicker-time-end" class="w-1/5 text-sm">
          마감시간
        </label>
        <input
          id="datepicker-time-end"
          class="p-1 mx-2 border border-slate-900 rounded-md bg-white"
          type="time"
          min="00:00"
          max="24:00"
        />
      </div>
      <div class="flex items-center">
        <label for="course" class="w-1/5 text-sm">
          코스
        </label>
        <div class="relative flex-1">
          <!-- layer select -->
          <div
            id="course"
            class="p-1 mx-2 flex-1 border border-slate-900 rounded-md"
            @click="showCourse"
          >
            <span>선택</span>
          </div>
          <!-- layer -->
          <div
            v-if="isShow"
            class="absolute p-4 flex flex-col top-0 left-0 w-full border border-slate-900 rounded-md bg-white"
          >
            <!-- list -->
            <ul>
              <li
                v-for="(item, index) in items"
                :key="index"
                class="flex items-center"
              >
                <input type="checkbox" :id="`check-${item}`" class="mr-3" />
                <label :for="`check-${item}`" class="flex">{{ item }}</label>
              </li>
            </ul>
            <!-- button -->
            <!-- left button -->
            <div class="mt-5 gap-2 flex">
              <button
                type="button"
                class="py-1 px-4 font-bold text-white rounded-sm bg-blue-500 flex-2"
                @click="isShow = !isShow"
              >
                확인
              </button>
              <button
                type="button"
                class="py-1 px-4 font-bold text-white rounded-sm bg-gray-400 flex-1"
              >
                취소
              </button>
            </div>
          </div>
        </div>
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
import { reactive, toRefs } from "vue";
import { XIcon } from "@heroicons/vue/solid";

export default {
  name: "LayerPopUp",
  emits: ["hideLayer"],
  components: {
    XIcon,
  },
  setup(props, { emit }) {
    const state = reactive({
      items: [
        "Select All",
        "레이크 > 파인",
        "필드 > 마운틴",
        "마운틴 > 밸리",
        "마운틴 > 마운틴",
      ],
      isShow: false,
    });

    const hideLayer = () => {
      emit("hideLayer", false);
    };

    const showCourse = () => {
      state.isShow = !state.isShow;
    };

    return {
      ...toRefs(state),
      hideLayer,
      showCourse,
    };
  },
};
</script>
