<template>
  <!-- header -->
  <header class="bg-at-blue text-white">
    <nav
      class="container py-5 px-4 gap-2 flex flex-col items-center sm:flex-row"
    >
      <h1 class="text-lg">제목 표시줄</h1>
    </nav>
  </header>
  <!-- contents -->
  <div
    class="container px-4 mt-10 mb-10 gap-2 flex flex-col sm:mt-4 sm:mb-0 sm:flex-row"
  >
    <!-- left -->
    <div class="gap-2 flex flex-2 flex-col">
      <!-- division -->
      <div
        class="border border-slate-900 rounded-md bg-white shadow-lg overflow-hidden"
      >
        <!-- title -->
        <div
          class="py-3 px-4 border-b-4 border-gray-200 bg-gray-100 font-bold text-black"
        >
          로그인 정보
        </div>
        <!-- form -->
        <form
          class="py-4 px-2 gap-2 flex flex-1 flex-col whitespace-nowrap sm:flex-row"
        >
          <div class="flex items-center">
            <label for="user-id" class="w-1/6 text-sm sm:w-auto">아이디</label>
            <input
              id="user-id"
              type="text"
              class="p-1 mx-2 flex-1 border border-slate-900 rounded-md"
              placeholder="아이디를 입력하세요"
            />
          </div>
          <div class="flex items-center">
            <label for="user-password" class="w-1/6 text-sm sm:w-auto">
              비밀번호
            </label>
            <input
              id="user-password"
              type="password"
              class="p-1 mx-2 flex-1 border border-slate-900 rounded-md"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
          <button
            type="submit"
            class="py-2 px-6 text-sm text-white rounded-sm bg-at-light-blue sm:py-1"
          >
            LOGIN
          </button>
        </form>
      </div>
      <!-- division -->
      <div class="border border-slate-900 rounded-md bg-white shadow-lg">
        <!-- title -->
        <div
          class="py-3 px-4 border-b-4 border-gray-200 bg-gray-100 font-bold text-black"
        >
          골프장 선택
        </div>
        <!-- form -->
        <form
          class="py-4 px-2 gap-2 flex flex-1 flex-col whitespace-nowrap sm:flex-row"
        >
          <div class="flex flex-1 items-center ">
            <label for="course" class="w-1/5 text-sm">
              골프장 선택
            </label>
            <div class="relative flex-1">
              <!-- layer select -->
              <div
                id="course"
                class="p-1 flex-1 border border-slate-900 rounded-md cursor-pointer"
                @click="toggleLayer('place-select')"
              >
                <div class="flex justify-between items-center">
                  <span>골프장 선택</span>
                  <check-icon class="h-4 w-4 text-at-light-blue" />
                </div>
              </div>
              <!-- layer -->
              <div
                id="place-select"
                class="modal absolute p-4 flex flex-col top-10 left-0 w-full border border-slate-900 rounded-md bg-white"
              >
                <!-- list -->
                <ul>
                  <li
                    v-for="(item, index) in items"
                    :key="index"
                    class="flex items-center place-list"
                  >
                    <p class="flex flex-1">{{ item }}</p>
                  </li>
                </ul>
                <!-- button -->
                <!-- left button -->
                <div class="mt-5 gap-2 flex">
                  <button
                    type="button"
                    class="py-1 px-4 font-bold text-white rounded-sm bg-blue-500 flex-2"
                  >
                    확인
                  </button>
                  <button
                    type="button"
                    class="py-1 px-4 font-bold text-white rounded-sm bg-gray-400 flex-1"
                    @click="toggleLayer('place-select')"
                  >
                    취소
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <!-- division -->
      <div
        class="border border-slate-900 rounded-md bg-white shadow-lg overflow-hidden"
      >
        <!-- title -->
        <div
          class="py-3 px-4 border-b-4 border-gray-200 bg-gray-100 font-bold text-black"
        >
          부킹아이템 설정
        </div>
        <!-- table -->
        <div class="max-h-80 overflow-auto">
          <table class="w-full table-fixed text-sm">
            <colgroup>
              <col width="25%" />
              <col width="15%" />
              <col width="15%" />
              <col width="*" />
            </colgroup>
            <thead class="bg-gray-100">
              <tr>
                <th class="p-2 border border-slate-600 whitespace-nowrap">
                  부팅날짜
                </th>
                <th class="p-2 border border-slate-600 whitespace-nowrap">
                  시작시간
                </th>
                <th class="p-2 border border-slate-600 whitespace-nowrap">
                  마감시간
                </th>
                <th class="p-2 border border-slate-600 whitespace-nowrap">
                  코스
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td
                  class="p-2 text-center border border-slate-600 whitespace-nowrap"
                >
                  2022-03-15
                </td>
                <td
                  class="p-2 text-center border border-slate-600 whitespace-nowrap"
                >
                  12:00
                </td>
                <td
                  class="p-2 text-center border border-slate-600 whitespace-nowrap"
                >
                  17:00
                </td>
                <td class="p-2 border border-slate-600">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <!-- division -->
      <div
        class="border border-slate-900 rounded-md bg-white shadow-lg overflow-hidden"
      >
        <!-- title -->
        <div
          class="py-3 px-4 border-b-4 border-gray-200 bg-gray-100 font-bold text-black"
        >
          예약 조회
        </div>
        <!-- readonly -->
        <div
          class="py-4 px-2 gap-2 flex flex-1 flex-col whitespace-nowrap sm:flex-row"
        >
          <div class="flex items-center sm:flex-1">
            <label for="success" class="text-sm">예약성공</label>
            <input
              id="success"
              type="text"
              class="p-1 mx-2 text-black border border-slate-900 rounded-md focus:outline-none"
              value="0"
              readonly
            />
          </div>
          <div class="flex items-center sm:flex-1">
            <label for="fin" class="text-sm">
              <i class="text-xl text-red-500">*</i>
              이용완료
            </label>
            <input
              id="fin"
              type="text"
              class="p-1 mx-2 text-black border-0 focus:outline-none"
              value="5/11/2022"
              readonly
            />
          </div>
        </div>
      </div>
      <!-- division -->
      <div class="gap-10 gap-y-6 flex flex-col sm:flex-row">
        <!-- left button -->
        <div class="gap-2 flex">
          <button
            type="button"
            class="py-2 px-12 font-bold text-white rounded-sm bg-blue-500 flex-1"
            @click="showLayer = !showLayer"
          >
            추가
          </button>
          <button
            type="button"
            class="py-2 px-5 font-bold text-white rounded-sm bg-red-400 flex-1"
          >
            삭제
          </button>
          <button
            type="button"
            class="py-2 px-5 font-bold text-white rounded-sm bg-gray-400 flex-1"
            @click="showLayer = !showLayer"
          >
            편집
          </button>
        </div>
        <!-- right button -->
        <div class="flex flex-1">
          <button
            type="button"
            class="py-3 w-full font-bold text-white rounded-sm bg-at-light-blue"
          >
            시작
          </button>
        </div>
      </div>
    </div>
    <!-- right -->
    <div class="flex-1">
      <!-- division -->
      <div
        class="border border-slate-900 rounded-md bg-white shadow-lg overflow-hidden"
      >
        <!-- title -->
        <div
          class="py-3 px-4 border-b-4 border-gray-200 bg-gray-100 font-bold text-black"
        >
          프로그램 로그
        </div>
        <!-- log -->
        <div class="program-log py-4 px-2 min-h-full max-h-80 overflow-auto">
          <p v-for="index in 20" :key="index">{{ ex }}</p>
        </div>
      </div>
    </div>
  </div>
  <!-- layer -->
  <layer-pop-up v-if="showLayer" @hideLayer="hideLayer"></layer-pop-up>
</template>

<script>
import { reactive, toRefs } from "vue";
import LayerPopUp from "@/components/LayerPopUp";
import { CheckIcon } from "@heroicons/vue/solid";

export default {
  name: "Home",
  components: {
    LayerPopUp,
    CheckIcon,
  },
  setup() {
    const state = reactive({
      items: ["골프장 > 파인", "골프장 > 마운틴", "골프장 > 밸리"],
      showLayer: false,
      ex: "20220315 15484 마운틴 -> 마운틴 예약중",
    });

    const toggleLayer = (name) => {
      let el = document.getElementById(name);
      if (el.style.display == "flex" || el.style.display == "block") {
        el.style.display = "none";
      } else {
        el.style.display = "flex";
      }
    };

    const hideLayer = (e) => {
      state.showLayer = e;
    };

    return {
      ...toRefs(state),
      toggleLayer,
      hideLayer,
    };
  },
};
</script>

<style lang="scss" scoped>
.modal {
  display: none;
}
table {
  thead > tr:first-child {
    th,
    td {
      border-top: 0;
    }
  }
  tr:last-child {
    th,
    td {
      border-bottom: 0;
    }
  }
  tr > th,
  tr > td {
    &:first-child {
      border-left: 0;
    }
    &:last-child {
      border-right: 0;
    }
  }
}
.place-list,
.program-log {
  > p {
    padding: 2px;
    &:hover,
    &:focus,
    &:active {
      outline: 2px solid #146ebe;
      cursor: pointer;
    }
  }
}
</style>
