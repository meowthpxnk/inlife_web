<template lang="html">
  <block-template
    :title = "title"
    :class_name = "class_name"
  >
    <iframe
      src="https://yandex.ru/map-widget/v1/?um=constructor%3Ada51d93378accac031ea55ca830f8cb03b5aad70554b8583671ee5a0cbefd624&amp;source=constructor"
      frameborder="0"
    />
    <div class="address" @click="copy">
      <p>Первостроителей 31а</p>
      <button>
        <!-- <Transition name="fade-icon"> -->
          <img src="@/assets/icons/copy.png" alt="" v-if="copied">
          <img src="@/assets/icons/ok.png" alt="" v-else>
        <!-- </Transition> -->
        <!-- <Transition name="fade-icon">
        </Transition>
         -->
      </button>
    </div>

  </block-template>
</template>

<script>
import BlockTemplate from "@/components/home/blocks/BlockTemplate.vue"


export default {
  components:{
    BlockTemplate,
  },
  data(){
    return {
      title: 'Мы на карте',
      class_name: 'map',
      copied: true,
    }
  },
  methods:{
    async copy(){
      navigator.clipboard.writeText("Первостроителей 31А");
      this.copied = false
      const delay = ms => new Promise(res => setTimeout(res, ms));
      await delay(2000);
      this.copied = true



    }
  },
}
</script>

<style lang="css" scoped>
.fade-icon-enter-active {
  transition: all 0.3s ease-out;
}

.fade-icon-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-icon-enter-from,
.fade-icon-leave-to {
  /* transform: translateX(20px); */
  opacity: 0;
}
</style>
