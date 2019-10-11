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
      default: () => Math.round(Math.random()*7)
    }
  }
}
</script>

<style lang="less">
  .panel {
    transform: translate3d(0, 0, 0);
    .title {
      color: rgb(239, 165, 77);
    }
  }
</style>