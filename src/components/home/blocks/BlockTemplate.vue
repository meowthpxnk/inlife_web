<template lang="html">
  <div class="content-block" :class="class_name">
    <div class="title">
      <h2>{{title}}</h2>
      <span class="dash"/>
    </div>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    title: String,
    class_name: String,
  }

}
</script>

<style lang="css" scoped>
</style>
