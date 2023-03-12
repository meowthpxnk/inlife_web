<template lang="html">
  <div class="content-block menu-page">
    <div class="content">
      <ul class="categories" v-if="semi_categories.length">
        <li
        v-for="category in semi_categories"
        :key="category"
        >
          <div class="title">
            <h2>{{category.title}}</h2>
            <span class="dash"/>
          </div>

          <ul class="dishes">
            <li v-for="dish in category.dishes" :key="dish">
              <div class="title">
                <h3>{{dish.title}}</h3>
              </div>
              <div class="ingredients">
                <p>{{dish.ingredients}}</p>
              </div>
              <div class="portion">
                <p>{{dish.portion}}</p>
              </div>
              <div class="price">
                <p>{{dish.price}}₽</p>
              </div>
            </li>
          </ul>
        </li>
      </ul>
      <span class="empty-title" v-else>
        Пустая категория
      </span>
    </div>
  </div>
</template>

<script>
export default {
  async mounted(){
    if (this.$store.getters.isDishesEmpty){
      // console.log()
      const id = this.$route.query.category_id
      if(id){
        await this.$store.dispatch('fetchMenuDishes', id)
      } else {
        this.$router.push({name: 'home'})
      }
    }



    await console.log(this.$store.getters.getSemiCategories)
    await this.$store.commit("disableFullLoader")

  },
  unmounted(){
    this.$store.commit('removeDishes')
  },
  methods:{
    filterCategory(id){
      try {
        return this.$refs.categories.filter(item => item.id === ("category-" + id))[0]
      } catch {
        console.error("")
      }
      return null
    }
  },
  computed:{
    categories(){
      return this.$store.getters.getMenuCategories
    },
    semi_categories(){
      return this.$store.getters.getSemiCategories
    },
  }
}
</script>

<style lang="css" scoped>
.empty-title{
  color: #fff;
  font-size: 30px;
  font-weight: 700;
  text-align: center;
  width: 100%;
  display: block;
  padding: 40px 0;
  text-transform: uppercase;
}
</style>
