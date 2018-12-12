<template lang="html">
  <a @click="onClick"
     @mouseover="isHovered = true"
     @mouseleave="isHovered = false"
     class="base"
     :class="{
       'has-background': hasBackground,
       'is-rounded': isRounded,
       'is-circle': isCircle
     }">
    <span
      class="icon is-medium"
      :class="[isHovered ? 'has-text-grey' : 'has-text-grey-lighter']">
      <i :class="iconClass"></i>
    </span>
    <span class="text is-size-7 has-text-grey" v-if="text">
      {{ text }}
    </span>
  </a>
</template>

<script>
export default {
  name: 'IconButton',
  props: {
    onClick: {
      type: Function,
      required: true
    },
    text: {
      type: String,
      default: ''
    },
    icon: {
      type: String,
      default: ''
    },
    hasBackground: {
      type: Boolean,
      default: false
    },
    isRounded: {
      type: Boolean,
      default: false
    },
    isCircle: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isHovered: false
    }
  },
  computed: {
    iconClass () {
      return `fas fa-${this.icon}`
    }
  }
}
</script>

<style lang="scss" scoped>
.base {
  display: inline-flex;
  align-items: center;
}
.has-background {
  background: #eee;
}
.is-rounded {
  padding: 0 .25rem;
  border-radius: 20px;
}
.is-circle {
  border-radius: 50%;
}
span.text {
  padding-right: .75rem;
}
</style>
