<template>
  <div class="buttons">
    <button @click="$store.dispatch('decreaseCount')">-</button>
    <button @click="$store.dispatch('increaseCount')">+</button>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>