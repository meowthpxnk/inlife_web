<template lang="html">
  <block-template
    :title = "title"
    :class_name = "class_name"
  >
    <ul class="horizontal-scroll scroll-items-default">
      <li
      class="clickable"
      v-for="category in menu_categories"
      :key="category.id"
      @click="openMenu(category.id)"
      :title="category.title"
      >
        <menu-template
        :title="category.title"
        :img="`${$store.getters.getAPIUrl}/images/categories/` + category.img"
        />
      </li>
    </ul>

  </block-template>
</template>

<script>
import BlockTemplate from "../BlockTemplate.vue"
import MenuTemplate from "./MenuTemplate.vue"

export default {
  components:{
    BlockTemplate,
    MenuTemplate,
  },
  data(){
    return {
      title: 'Меню',
      class_name: 'menu',
    }
  },
  computed:{
    menu_categories(){
      return this.$store.getters.getMenuCategories
    },
  },
  methods:{
    async openMenu(id){
      await this.$store.commit("enableSemiLoader")
      
      await this.$store.dispatch('fetchMenuDishes', id)
      await this.$store.commit("disableSemiLoader")
      await this.$router.push({
        name:'menu',
        query: {'category_id': id},
        hash: '#header',
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
