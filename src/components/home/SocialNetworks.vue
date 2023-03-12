<template lang="html">
  <ul class="social-activities">
    <li>
      <social-network-button
        :bg_color="'#0077ff'"
        :href="''"
      >
        <img src="@/assets/icons/vk.png" alt="">
      </social-network-button>
    </li>
    <li>
      <social-network-button
        :bg_color="'#ff8534'"
        :href="''"
      >
        <img src="@/assets/icons/instagram.png" alt="">
      </social-network-button>
    </li>
    <li>
      <social-network-button
        :bg_color="'#26a2e0'"
        :href="''"
      >
        <img src="@/assets/icons/telegram.png" alt="">
      </social-network-button>
    </li>
  </ul>
</template>

<script>
import SocialNetworkButton from "@/components/buttons/SocialNetworkButton.vue"
export default {
  components:{
    SocialNetworkButton
  }
}
</script>

<style lang="css" scoped>
a img{
  /* filter: brightness(0) invert(1); */
  width: 100%;
  height: 100%;
}
</style>
