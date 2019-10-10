<template>
  <div class="panel">
    <slot name="title">
      <div class="title">{{text}}</div>
    </slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: () => '标题'
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