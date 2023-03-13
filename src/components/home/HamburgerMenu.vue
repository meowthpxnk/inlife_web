<template lang="html">
  <div
  class="hamburger-menu-container bg-drop"
  v-show="$store.getters.isOpenedHamburgerMenu"
  @click.self="$store.commit('closeHamburgerMenu')"
  >
    <navigation-panel/>
    <social-networks class="socials"/>
    
  </div>
</template>

<script>
import SocialNetworks from "@/components/home/SocialNetworks.vue"

import NavigationPanel from "@/components/home/NavigationPanel.vue"
export default {
  components:{
    NavigationPanel,
    SocialNetworks,
  }
}
</script>

<style lang="css" scoped>
.hamburger-menu-container{
  display: flex;
  flex-direction: column;
}
.socials{
  display: flex;
  flex-direction: row;
  margin-top: 40px;
}
</style>
