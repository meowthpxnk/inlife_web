<template lang="html">
  <div class="wrapper-container">
    <div class="focus wrapper-bg">
      <div class="bg"/>
    </div>
    <div class="wrapper wrapper-bg">
      <div class="clickable poster" v-for=" item in 1" :key="item">
        <div class="img">
          <img class="default-img" :src="`${$store.getters.getAPIUrl}/images/events/` + img" alt="" v-if="img">
        </div>
        <div class="info">
          <div class="date">
            <p>{{dateTime}}</p>
          </div>
          <div class="title">
            <h3>{{parseTitle}}</h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

const monthes = {
  0: "ЯНВ",
  1: "ФЕВ",
  2: "МАР",
  3: "АПР",
  4: "МАЯ",
  5: "ИЮН",
  6: "ИЮЛ",
  7: "АВГ",
  8: "СЕН",
  9: "ОКТ",
  10: "НОЯ",
  11: "ДЕК",
}

export default {
  props:{
    title: String,
    date: String,
    img: String,
    date_time: String,
  },
  computed:{
    dateTime(){
      console.log(monthes)
      const check_date = new Date(this.date_time)
      return `${check_date.getUTCDate()} ${monthes[check_date.getUTCMonth()]}`
      // return monthes[check_date.getMonth()]
    },
    parseTitle(){
      if (this.title.length > 15){
        return this.title.slice(0,13) + '...'
      }
      return this.title
    },
    dateCheck(){
      return new Date(this.date_time)
    }
  }
}
</script>

<style lang="css" scoped>

.focus .bg{
  background-color: var(--new-bg-color);
  height: 100%;
  border-radius: 10px;
}
.wrapper-container{
  width: fit-content;
  position: relative;
}
.wrapper-bg{
  width: fit-content;
  background-color: var(--new-bg-color);
  padding: 20px 20px 15px 20px;
  border-radius: 8px;
  z-index: 1;
}
.wrapper{
  position: inherit;
  top: 0;
  background: none;
  z-index: 2;
}
.poster{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -webkit-flex-direction: column;
  -ms-flex-direction: column;
  flex-direction: column;
  gap: 10px;
}
.focus{
  top: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
  background: none;
  padding: 40px 0 0 40px;
  transition: all 0.5s;
}
.display-n{
  opacity: 0;
  position: static;
}
div .info{
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
}
div .info .title{
  color: #fff;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
}
div .info .date{
  background-color: #fff;
  padding: 6px;
  border-radius: 6px;
  width: 56px;
  margin-right: 10px;
}
div .img{
  width: 240px;
  height: 400px;
  background-color: var(--img-bg-color);
  border-radius: 8px;
  overflow: hidden;
}
.wrapper-container:hover .focus{
  padding: 0;
}
.wrapper-container{
  color: #000;
}
.date{
  white-space: nowrap;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  justify-content: center;
}
</style>
