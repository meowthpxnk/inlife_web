<template lang="html">
  <div class="info">
    <div class="date">
      <p>{{dateTime}}</p>
    </div>
    <div class="quantity">
      <p>{{photos_quantity}} фото</p>
    </div>
  </div>
  <div class="img">
    <img class="default-img" :src="`${$store.getters.getAPIUrl}/images/photo_reports/` + img" alt="" v-if="img">
  </div>
  <div class="title">
    <h3>{{parseTitile}}</h3>
  </div>
</template>

<script>
export default {
  props:{
    title: String,
    date: String,
    photos_quantity: Number,
    img: String,
    date_time: String,
  },
  computed:{
    dateTime(){
      const take_date = new Date(this.date_time)
      return take_date.toLocaleDateString('ru-RU', {timeZone: 'UTC'})
    },
    parseTitile(){
      if (this.title.length > 15){
        return this.title.slice(0,14) + "..."
      }
      return this.title
    }
  }
}
</script>

<style lang="css" scoped>
.img{
  background-color: var(--img-bg-color);
}
</style>
