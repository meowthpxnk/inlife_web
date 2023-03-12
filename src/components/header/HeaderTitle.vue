<template lang="html">
  <div class="header-title">
    <div class="text-wrapper-bg">
      <logo-template-default v-if="true"/>
      <logo-template v-else/>
    </div>
  </div>
</template>

<script>
import LogoTemplateDefault from "@/components/templates/LogoTemplateDefault.vue"
import LogoTemplate from "@/components/templates/LogoTemplate.vue"

export default {
  components:{
    LogoTemplate,
    LogoTemplateDefault,
  }
}
</script>

<style lang="css" scoped>
</style>
