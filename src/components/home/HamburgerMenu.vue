<template lang="html">
  <div
  class="hamburger-menu-container bg-drop"
  v-show="$store.getters.isOpenedHamburgerMenu"
  @click.self="$store.commit('closeHamburgerMenu')"
  >
    <navigation-panel/>
  </div>
</template>

<script>
import NavigationPanel from "@/components/home/NavigationPanel.vue"
export default {
  components:{
    NavigationPanel
  }
}
</script>

<style lang="css" scoped>
</style>
