export default {
  getTags(state) {
    // const guild = rootState.guilds.find(g => g.guildId === rootState.selectedGuildId);
    // if (!(guild && guild.coreSettings)) return {};
    // return {
    //   ...guild.coreSettings.tags,
    //   ...state.changes.coreSettings.tags,
    // };
    return state.tags.filter(tag => !tag.removed);
  },
  removedTagNames(state) {
    return state.tags.filter(tag => tag.removed || tag.renamed).map(tag => tag.id);
  },
  updatedTags(state) {
    const changed = state.tags.filter(tag => tag.changed && !tag.removed);
    return changed.reduce((acc, tag) => {
      acc[tag.name] = {
        content: tag.content,
        category: tag.category,
      };
      return acc;
    }, {});
  },
};
