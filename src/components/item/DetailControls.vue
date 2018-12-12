<template lang="html">
  <div class="control-wrapper">
    <div>
      <IconButton
        text="Like!"
        icon="heart"
        :has-background="true"
        :is-rounded="true"
        :on-click="toggleLike">
      </IconButton>
      <span class="like-count">
        {{ likeCount }}
      </span>
      <IconButton
        text="Comment"
        icon="comment-alt"
        :has-background="true"
        :is-rounded="true"
        :on-click="toggleComment">
      </IconButton>
    </div>
    <IconButton
      icon="flag"
      :has-background="true"
      :is-circle="true"
      :on-click="toggleFlag">
    </IconButton>
  </div>
</template>

<script>
import IconButton from '../common/IconButton'

export default {
  name: 'DetailControls',
  props: {
    likeCount: {
      type: Number,
      required: true
    }
  },
  components: {
    IconButton
  },
  methods: {
    toggleLike () {},
    toggleComment () {},
    toggleFlag () {}
  }
}
</script>

<style lang="scss" scoped>
.control-wrapper {
  display: flex;
  justify-content: space-between;
  margin: 1.5rem 0 1rem 0;
}
.like-count {
  display: inline-block;
  font-size: .85rem;
  vertical-align: text-bottom;
  margin-right: 1rem;
}
</style>
