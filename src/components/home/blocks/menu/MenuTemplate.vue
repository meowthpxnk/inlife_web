<template lang="html">
  <div class="img">
    <img class="default-img" :src="img" alt="" v-if="img">
    
  </div>
  <div class="title">
    <h3>{{title}}</h3>
  </div>
  <!-- <div class="wrapper">
    <div class="title">
      
    </div>
  </div> -->
</template>

<script>
export default {
  props:{
    title: String,
    img: String,
  }
}
</script>

<style lang="css" scoped>
/* .img{
  background-color: var(--img-bg-color);
} */
/* .asdasdasd{
  height: 4000px;
} */
</style>
