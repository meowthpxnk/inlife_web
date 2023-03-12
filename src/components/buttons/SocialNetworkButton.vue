<template lang="html">
  <a :style="cssVars">
    <slot/>
  </a>
</template>

<script>
export default {
  props:{
    bg_color: String,
    href: String,
  },
  computed: {
    cssVars(){
      return {
        '--bg-color': this.bg_color,
      }
    },
  }
}
</script>

<style lang="css" scoped>
a {
  cursor: pointer;
  padding: 8px;
  position: relative;
  display: block;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  text-align: center;
  line-height: 60px;
  background: #fff;
  border-radius: 10px;
  font-size: 30px;
  color: #666;
  transition: .5s;
}
a img{
  /* filter: brightness(0) invert(1); */
  width: 100%;
  height: 100%;
}

a:before {
  content: '';
  position: absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  border-radius: 10px;
  background: var(--bg-color);
  transition: .5s;
  transform: scale(.9);
  z-index: -1;
}

a:hover:before {
  transform: scale(1.2);
  box-shadow: 0 0 15px var(--bg-color);
  filter: blur(2px);
}

a:hover {
  color: var(--bg-color);
  box-shadow: 0 0 15px var(--bg-color);
  text-shadow: 0 0 15px var(--bg-color);
}
</style>
