<template>
  <div class="tag-input">
    <base-input class="name" label="name"
    :value="name" @input="changeName"></base-input>
    <base-input class="content" label="content"
    :value="content" @input="changeContent"></base-input>
    <base-input class="category" label="category"
    :value="category" @input="changeCategory"></base-input>
    <base-button style="width: 8rem;"
    v-on:click="addTag">Add</base-button>
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
  data() {
    return {
      name: '',
      content: '',
      category: '',
    };
  },
  methods: {
    addTag() {
      this.$store.commit('Mchanges/addTag', {
        name: this.name,
        content: this.content,
        category: this.category,
      });
      this.name = '';
      this.category = '';
      this.content = '';
    },
    changeName({ target: { value } }) {
      this.name = value;
    },
    changeContent({ target: { value } }) {
      this.content = value;
    },
    changeCategory({ target: { value } }) {
      this.category = value;
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
