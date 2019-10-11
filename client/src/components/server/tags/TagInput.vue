<template>
  <div class="tag-input">
    {{ changed ? '*' : ''}}
    <base-input class="name" label="name"
    :value="name" @input="changeName"></base-input>
    <base-input class="content" label="content"
    :value="content" @input="changeContent"></base-input>
    <base-input class="category" label="category"
    :value="category" @input="changeCategory"></base-input>
    <base-button style="width: 8rem;"
    v-if="id != undefined" v-on:click="sudoku">Remove</base-button>
  </div>
</template>

<script>
import BaseInput from '@/components/base/BaseInput.vue';
import BaseButton from '@/components/base/BaseButton.vue';

// This is not very performant
// For a performance boost store changes locally and debounce store all fields in store
export default {
  components: {
    BaseInput,
    BaseButton,
  },
  props: ['name', 'category', 'content', 'changed', 'id', 'index'],
  methods: {
    sudoku() {
      this.$store.commit('Mchanges/removeTag', this.id);
    },
    changeField(field, value) {
      this.$store.commit('Mchanges/changeTag', {
        index: this.index,
        value,
        field,
      });
    },
    changeName({ target: { value } }) {
      this.changeField('name', value);
    },
    changeContent({ target: { value } }) {
      this.changeField('content', value);
    },
    changeCategory({ target: { value } }) {
      this.changeField('category', value);
    },
  },
};
</script>

<style lang="scss" scoped>
.tag-input {
  display: flex;

  .name, .category, .content {
    margin-right: .5rem;
  }
  .content {
    flex: 1;
  }
}
</style>
