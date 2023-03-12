<template lang="html">
  <div class="content-block photo-reports-page">
    <div class="content">
      <div class="info">
        <div class="title">
          <h2>{{photo_report.title}}</h2>
        </div>
        <div class="date">
          <h2>{{dateTime}}</h2>
        </div>
      </div>
      <ul class="photo-reports">
        <li v-for="photo in photo_report.photos" :key="photo">
          <div class="wrapper">
            <div class="block">
              <div class="inner">
                <div class="inner-content">
                  <div class="img">
                    <img :src="`${$store.getters.getAPIUrl}/images/photos/` + photo.img" alt="">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  async mounted(){
    // const photo_report = this.$store.getters.getActivePhotoReport
    if (!(this.$store.getters.getActivePhotoReport)){
      await this.$store.dispatch('fetchGetPhotoReportInfo', this.$route.params.id)
    }
    this.photo_report = await this.$store.getters.getActivePhotoReport
    await this.$store.commit("disableFullLoader")

  },
  unmounted(){
    this.$store.commit("removeActivePhotoReport")
  },
  data(){
    return{
      photo_report: {
        photos: [],
        title: '',
        date: '',
        date_time: '',
      }
    }
  },
  computed:{
    dateTime(){
      return new Date(this.photo_report.date_time).toLocaleDateString('ru-RU', {timeZone: 'UTC'})
    }
  }
}
</script>

<style lang="css" scoped>
.wrapper{
  width: 100%;
}
.block {
    width: 100%;
}
.inner {
    position: relative;
    height: 0;
    border: none;
    padding-top: 50%;
    padding-bottom: 50%;
}
.inner-content {
    /* padding: 10px; */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
}
</style>
