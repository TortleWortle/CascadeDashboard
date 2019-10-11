const tagIsOriginal = (tags, newTag) => {
  const tag = tags[newTag.name];

  if (!tag) return false;

  return (tag.content === newTag.content && tag.category === newTag.category);
};

export default {
  hydrateState(_state, guild) {
    this.commit('Mchanges/hydrateTags', guild.coreSettings.tags);
  },
  hydrateTags(state, oTags) {
    const tags = {
      ...oTags,
    };

    state.originalTags = oTags;

    state.tags = Object.keys(tags).map(name => ({
      name,
      id: name,
      category: tags[name].category,
      content: tags[name].content,
      changed: false,
      removed: false,
    }));
  },
  clearChanges(state) {
    this.commit('Mchanges/hydrateTags', state.originalTags);
  },
  removeTag(state, tagId) {
    const tags = [
      ...state.tags,
    ];
    const index = tags.findIndex(tag => tag.id === tagId);
    // Check if the tag is stored on the server
    // Mark as removed if it is otherwise just yeet it out
    if (state.originalTags[tagId]) {
      tags[index].removed = true;
    } else {
      tags.splice(index, 1);
    }
    state.tags = tags;
  },
  addTag(state, { name, content, category }) {
    const tags = [
      ...state.tags,
    ];
    // Push a new tag to the store
    tags.push({
      name,
      id: name,
      category,
      content,
      changed: true,
      removed: false,
      new: true,
    });
    state.tags = tags;
  },
  changeTag(state, { index, field, value }) {
    const tags = [
      ...state.tags,
    ];
    // set the field value
    tags[index][field] = value;

    // special things if the name field is changed
    // this is also the server id for some reason
    if (field === 'name') {
      // If it's a new tag don't do anything
      if (tags[index].new) {
        tags[index].id = value;
      } else {
        // If it's an existing tag mark it as changed (so the removedTags picks up on it)
        tags[index].renamed = tags[index].name !== tags[index].id;
      }
    }

    tags[index].changed = !tagIsOriginal(state.originalTags, tags[index]);

    state.tags = tags;
  },
};
