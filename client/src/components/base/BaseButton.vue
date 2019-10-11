<template>
  <button class="base-button" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'base-button',
};
</script>

<style lang="scss" scoped>
  .base-button {
    background-color: #24B69E;
    color: white;
    padding: .7em 3em;
    border-radius: 5em;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #1E8574;
    }

    &:active {
      opacity: .75;
    }
  }
</style>
