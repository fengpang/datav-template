<template>
  <div class="panel animated" :class="$store.state.animates[animateIndex]">
    <slot name="title">
      <div class="title">{{text}}</div>
    </slot>
    <slot></slot>
  </div>
</template>

<script>
import 'animate.css'
export default {
  props: {
    text: {
      type: String,
      default: () => '标题'
    },
    animateIndex: {
      type: [String, Number],
      default: () => 0
    }
  }
}
</script>

<style lang="less">
  .panel {
    .title {
      color: rgb(239, 165, 77);
    }
  }
</style>