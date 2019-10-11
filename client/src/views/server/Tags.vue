<template>
    <ContentContainer>
      <ContentCard class="twopart">
         <div class="one">
            <h1>Tags</h1>
            <tag-input
            class="tag-input" v-for="(tag, key) in tags"
            :key="key" :index="key" :id="tag.id" :name="tag.name" :category="tag.category"
             :content="tag.content" :changed="tag.changed"></tag-input>
            <new-tag-input></new-tag-input>
          </div>
      </ContentCard>
      <ContentCard class="twopart">
        <div class="one">
          <h1>Options</h1>
            <ui-toggle label="Allow tag to be used as commands"
            saveGet="guildAllowTagCommands"
            saveSet="setGuildAllowTagCommands" />
        </div>
        <div class="two"></div>
      </ContentCard>
    </ContentContainer>
</template>

<script>
import { mapGetters } from 'vuex';

import TagInput from '@/components/server/tags/TagInput.vue';
import NewTagInput from '@/components/server/tags/NewTagInput.vue';
import ContentContainer from '@/components/layout/ContentContainer.vue';
import ContentCard from '@/components/layout/ContentCard.vue';
import UiToggle from '@/components/ui/UiToggle.vue';

export default {
  components: {
    ContentContainer,
    ContentCard,
    TagInput,
    NewTagInput,
    UiToggle,
  },
  computed: mapGetters({
    guild: 'getSelectedGuild',
    tags: 'Mchanges/getTags',
  }),
};
</script>

<style lang="scss" scoped>
  .one, .two {
    flex: 1;
  }

  .one {
    margin-right: 5rem;
  }
  .tag-input {
    margin-bottom: .75rem;
  }
</style>
