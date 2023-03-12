<template lang="html">
  <div class="content-block event-page">
    <div class="content">
      <div class="img">
        <div class="bg"/>
        <img :src="`${$store.getters.getAPIUrl}/images/events/` + event.img" alt="" v-if="event.img">
        <span v-else/>
      </div>
      <div class="title">
        <h2>{{event.title}}</h2>
      </div>
      <div class="date">
        <h3>{{dateTime}}</h3>
      </div>
      <div class="description">
        <h4>{{event.description}}</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async mounted(){
    if (!(this.$store.getters.getActiveEvent)){
      await this.$store.dispatch('fetchGetEventInfo', this.$route.params.id)
      
    }
    this.event = await this.$store.getters.getActiveEvent

    await this.$store.commit("disableFullLoader")
  },
  unmounted(){
    this.$store.commit('removeActiveEvent')
  },
  data(){
    return {
      event: {
        title: '',
        img: '',
        date: '',
        date_time: '',
        description: '',
      }
    }
  },
  computed:{
    dateTime(){
      const check_date = new Date(this.event.date_time)  
      return `${check_date.toLocaleString('ru-RU', {month: 'long', day: '2-digit', timeZone: 'UTC'})} ${check_date.toLocaleString('ru-RU', {year: 'numeric', timeZone: 'UTC'})} ${check_date.toLocaleString('ru-RU', {hour: '2-digit', minute: '2-digit', timeZone: 'UTC'})}`
    }
  }
}
</script>

<style lang="css" scoped>
img{
  background-color: #fff;
}
.img span{
  background-color: #fff;
  height: 100%;
  width: 100%;
  z-index: 1;
  border-radius: 10px
}
</style>
