<template lang="html">
  <block-template
    :title = "title"
    :class_name = "class_name"
  >
    <ul class="horizontal-scroll">
      <li
      class="clickable polaroid-photo"
      v-for="photo_report in photo_reports"
      :key="photo_report.id"
      :title="photo_report.title"
      @click="goToPhotoReport(photo_report.id)"
      >
        <photo-report-template
        :photos_quantity="photo_report.photos_quantity"
        :date="photo_report.date"
        :title="photo_report.title"
        :img="photo_report.img"
        :date_time="photo_report.date_time"
        />
      </li>
    </ul>

  </block-template>
</template>

<script>
import BlockTemplate from "../BlockTemplate.vue"
import PhotoReportTemplate from "./PhotoReportTemplate.vue"


export default {
  components:{
    BlockTemplate,
    PhotoReportTemplate,
  },
  data(){
    return {
      title: 'Фотоотчеты',
      class_name: 'photo-reports',
    }
  },
  computed:{
    photo_reports(){
      const photo_reports = this.$store.getters.getAllPhotoReports
      console.log(photo_reports)
      return photo_reports.sort(function(a, b) {
        const frst = new Date(a.date_time)
        const sec = new Date(b.date_time)
        return sec - frst
      })
    },
  },
  methods:{
    async goToPhotoReport(id){
      await this.$store.commit("enableSemiLoader")
      
      await this.$store.dispatch('fetchGetPhotoReportInfo', id)
      await this.$store.commit("disableSemiLoader")
      await this.$router.push({
        name:'photoReportPage',
        params:{'id':id},
        hash: '#header'
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
