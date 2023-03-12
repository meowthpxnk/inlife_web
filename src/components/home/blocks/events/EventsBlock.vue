<template lang="html">
  <block-template
    :title = "title"
    :class_name = "class_name"
  >
    <ul class="horizontal-scroll scroll-items-default">
      <li
      class="clickable"
      v-for="event in events"
      :key="event.id"
      @click="goToEvent(event.id)"
      :title="event.title"
      >
        <event-template
        :title="event.title"
        :date="event.date"
        :date_time="event.date_time"
        :img="event.img"
        />
      </li>
    </ul>
  </block-template>
</template>

<script>
import BlockTemplate from "../BlockTemplate.vue"
import EventTemplate from "./EventTemplate.vue"


export default {
  components:{
    EventTemplate,
    BlockTemplate,
  },
  data(){
    return {
      title: 'Мероприятия',
      class_name: 'events',
    }
  },
  computed:{
    events(){
      const events = this.$store.getters.getAllEvents
      return events.sort(function(a, b) {
        const frst = new Date(a.date_time)
        const sec = new Date(b.date_time)
        return frst - sec 
      })
    }
  },
  methods:{
    async goToEvent(id){
      await this.$store.commit("enableSemiLoader")
      await this.$store.dispatch('fetchGetEventInfo', id)
      await this.$store.commit("disableSemiLoader")
      await this.$router.push({
        name:'eventPage',
        params:{'id':id},
        hash: '#header'
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
