<template lang="html">
  <nav>
    <ul class="nav-bar">
      <li>
        <button @click="scrollTo('events-block')">
          <span>Мероприятия</span>
          <div class="under-slash">
            <div class="slash" />
          </div>
        </button>
      </li>
      <li>
        <button @click="scrollTo('menu-block')">
          <span>Меню</span>
          <div class="under-slash">
            <div class="slash" />
          </div>
        </button>
      </li>
      <li>
        <button @click="scrollTo('photos-block')">
          <span>Фотоотчеты</span>
          <div class="under-slash">
            <div class="slash" />
          </div>
        </button>
      </li>
      <li>
        <button @click="scrollTo('map-block')">
          <span>Мы на карте</span>
          <div class="under-slash">
            <div class="slash" />
          </div>
        </button>
      </li>
    </ul>
  </nav>
</template>

<script>
// import NavButton from "@/components/buttons/NavButton.vue"

export default {
  components: {
    // NavButton
  },
  methods: {
    async scrollTo(id) {
      const is_home_page = this.$router.currentRoute._value.name === "home"
      // console.log(is_home_page)
      if (!(is_home_page)) {
        await this.$router.push({ name: "home" })
      }
      const header = document.getElementById("header-bg")
      const block = await document.getElementById(id)
      console.log(header.offsetHeight)
      console.log(block.offsetTop)
      if (!(is_home_page)) {
        window.scrollTo({
          top: block.offsetTop - 100,
          left: 0,
          // behavior: 'smooth'
        });
      } else {
        window.scrollTo({
          top: block.offsetTop - 100,
          left: 0,
          behavior: 'smooth'
        });
      }
      if (this.$store.getters.isOpenedHamburgerMenu) {
        this.$store.commit("closeHamburgerMenu")
      }
    },
  }
}
</script>

<style lang="css" scoped></style>
