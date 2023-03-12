<template>
  <div class="contwiner-wrap">
    <div class="container">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  async mounted(){
    const appHeight = () => {
			const doc = document.documentElement
			doc.style.setProperty('--app-height', `${window.innerHeight - 100 - 80}px`)
      console.log(window.screen.height)
		}
		window.addEventListener('resize', appHeight)
		appHeight()
  }
}
</script>

<style>
@import "@/assets/style/style.css";
:root {
  --app-height: 100%;
}
</style>
