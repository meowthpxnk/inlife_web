<template lang="html">

  <div class="header-bg" id="header-bg">
    <img src="@/assets/imgs/main-logo.png" alt="">
  </div>

  <header-component/>

  <router-view/>

  <footer-component/>

  <hamburger-menu/>

  <preloader-full/>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import HamburgerMenu from "@/components/home/HamburgerMenu.vue"

import HeaderComponent from "@/components/header/HeaderComponent.vue"
import FooterComponent from "@/components/footer/FooterComponent.vue"
import PreloaderFull from "@/components/loaders/PreloaderFull.vue"
export default {

  async mounted(){
    await this.$store.commit("enableFullLoader")
    await this.$store.dispatch("fetchInlifeInfo")
    const is_home_page = this.$router.currentRoute._value.name === "home"
    if (is_home_page){
      await this.$store.commit("disableFullLoader")
    }    
  },
  components:{
    HamburgerMenu,

    HeaderComponent,
    FooterComponent,

    PreloaderFull,
  },
}
</script>

<style lang="css" scoped>

</style>
