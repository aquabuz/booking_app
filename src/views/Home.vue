<template>
  <header class="bg-at-blue text-white">
    <nav
      class="container py-5 px-4 flex flex-col gap-4 items-center sm:flex-row"
    >
      <h1 class="text-lg">제목 표시줄</h1>
    </nav>
  </header>
  <div class="container mt-10 px-4 flex sm:flex-row">
    <div class="flex flex-2 p-1">
      <div class="box rounded-mg">
        <div class="p-2 bg-at-light-blue text-center text-white">
          로그인 정보
        </div>
        <div class="flex p-2">
          <div class="flex">
            <label for="id" class="flex-none">아이디</label>
            <input
              id="user-id"
              type="text"
              class="rounded-md"
              placeholder="아이디를 입력하세요"
            />
          </div>
          <div class="flex">
            <label for="password" class="flex-none">비밀번호</label>
            <input
              id="user-password"
              type="password"
              class="rounded-md"
              placeholder="비밀번호를 입력하세요"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="flex p-1"></div>
  </div>
</template>

<script>
export default {
  name: "Home",
  components: {},
  setup() {
    return {};
  },
};
</script>
