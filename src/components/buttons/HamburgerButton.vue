<template lang="html">
  <!-- <button>
    <img src="@/assets/icons/hamburger.png" alt="">
  </button> -->
  <span><a></a></span>
</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
@import url('https://fonts.googleapis.com/css?family=Montserrat:600&display=swap');
body{
  margin: 0;
  padding: 0;
  display: flex;
  height: 100vh;
  align-items: center;
  justify-content: center;
  background:#fff;
}
span{
  position: relative;
  display: inline-flex;
  width: 55px;
  height: 55px;
  /* margin: 0 15px; */
  perspective: 1000px;
  cursor: pointer;
}
span a{
  font-size: 19px;
  letter-spacing: 1px;
  transform-style: preserve-3d;
  transform: translateZ(-25px);
  transition: transform .25s;
  font-family: 'Montserrat', sans-serif;

}
span a:before{
  position: absolute;
  content: url(@/assets/icons/hamburger.png);
  height: 55px;
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #fff;
  box-sizing: border-box;
  border-radius: 5px;
}
span a:after{
  position: absolute;
  content: url(@/assets/icons/hamburger-white.png);
  height: 55px;
  width: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 5px solid #fff;
  box-sizing: border-box;
  border-radius: 5px;
}
span a:before{
  color: #000;
  background: #fff;
  transform: rotateY(0deg) translateZ(25px);
}
span a:after{
  color: #fff;
  transform: rotateX(90deg) translateZ(25px);
}
span a:hover{
  transform: translateZ(-25px) rotateX(-90deg);
}

</style>
