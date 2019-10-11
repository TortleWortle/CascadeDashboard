<template>
  <div class="base-input">
    <label class="label">{{ label }}</label>
    <input class="input" v-bind="$attrs" :value="value" v-on="$listeners">
  </div>
</template>

<script>
export default {
  name: 'base-input',
  inheritAttrs: false,
  props: {
    value: {
      required: false,
    },
    label: {
      required: true,
    },
  },
  computed: {
    listeners() {
      const { input, ...listeners } = this.$listeners;
      return listeners;
    },
  },
  methods: {
    input(event) {
      this.$emit('input', event.target.value);
    },
  },
};
</script>

<style lang="scss" scoped>
  .base-input {
    position: relative;

    .input {
      background: #282848;
      display: block;
      width: 100%;
      box-sizing: border-box;
      border: none;
      border-radius: 2px;
      padding: 2em 1em 1em 1em;
      color: white;
      font-size: 1rem;
    }

    .label {
      position: absolute;
      top: .75rem;
      left: 1rem;
      font-size: .75rem;
      color: #CCCCE8;
    }
  }
</style>
