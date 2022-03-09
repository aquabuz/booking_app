<template>
  <div class="relative min-h-full text-base box-border">
    <router-view />
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;400;500;600;700&display=swap");
::-webkit-scrollbar {
  width: 6px;
}
::-webkit-scrollbar-track {
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  border-radius: 3px;
  background-color: rgba($color: #000, $alpha: 0.2);
}
</style>
