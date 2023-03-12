<template lang="html">
  <home-component/>
</template>

<script>
import HomeComponent from "@/components/home/HomeComponent.vue"

export default {
  async mounted(){
    // window.scrollTo({top: 520})
  },
  components:{
    HomeComponent,
  }
}
</script>

<style lang="css" scoped>
</style>
