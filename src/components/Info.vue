<script lang="ts" setup>
defineProps<{
  title: string;
  description: string;
  onClickButton?: VoidFunction;
}>();
</script>

<template>
  <div class="cartEmpty d-flex align-center justify-center flex-column flex">
    <h2>{{ title }}</h2>
    <p class="opacity-6">{{ description }}</p>
    <button @click="onClickButton" class="greenButton">
      <img src="../assets/arrow.svg" alt="Arrow" />
      Вернуться назад
    </button>
  </div>
</template>

<style scoped></style>
