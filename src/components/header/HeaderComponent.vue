<template lang="html">
    <!-- <header-title/> -->

    <header id="header" :style="{
        'height': pixels + 'px',
        'background-color': 'rgba(20, 18, 26,' + bgc + ')',
        'box-shadow': '0px 10px 40px 10px rgba(0,0,0,' + shadow + ')'
    }">

        <div class="header-content content-block">
            <div class="logo" @click="goHome">
                <img src="@/assets/imgs/main-logo.png" alt="">
            </div>
            <div class="hamburger-button">
                <hamburger-button @click="openHamburgerMenu" />
            </div>
            <navigation-panel />
            <social-networks />
            <!-- <div class="logo">
              <img src="@/assets/imgs/main-logo.png" alt="">
          </div> -->

            <!-- <navigation-panel/> -->
            <!-- <ul class="nav-bar">
              <li>
                  <span>Мероприятия</span>
                  <div class="under-slash">
                      <div class="slash"/>
                  </div>
              </li>
              <li>
                  <span>Меню</span>
                  <div class="under-slash">
                      <div class="slash"/>
                  </div>
              </li>
              <li>
                  <span>Фотоотчеты</span>
                  <div class="under-slash">
                      <div class="slash"/>
                  </div>
              </li>
              <li>
                  <span>Мы на карте</span>
                  <div class="under-slash">
                      <div class="slash"/>
                  </div>
              </li>
          </ul> -->
            <!-- <ul class="socials">
              <li>
                  <img src="@/assets/icons/vk.png" alt="">
              </li>
              <li>
                  <img src="@/assets/icons/vk.png" alt="">
              </li>
              <li>
                  <img src="@/assets/icons/vk.png" alt="">
              </li>
          </ul> -->
        </div>






        <div class="additional-block-container" v-if="false">
            <div class="additional-block">
                <div class="hamburger-button">
                    <hamburger-button @click="openHamburgerMenu" />
                    <div class="logo">
                        <h2>InLife</h2>
                    </div>
                </div>
                <navigation-panel />
                <social-networks />
                <div class="logo-sact">
                    <img src="@/assets/imgs/main-logo.png" alt="">
                </div>
            </div>
        </div>
    </header>
</template>

<script>
/* eslint-disable vue/no-unused-components */
import HeaderTitle from "@/components/header/HeaderTitle.vue"

import SocialNetworks from "@/components/home/SocialNetworks.vue"
import NavigationPanel from "@/components/home/NavigationPanel.vue"

import HamburgerButton from "@/components/buttons/HamburgerButton.vue"

export default {
    components: {
        HeaderTitle,
        SocialNetworks,
        NavigationPanel,

        HamburgerButton
    },

    data() {
        return {
            isMounted: false,
            isScrolled: 0,
        }
    },
    async mounted() {
        console.log(this.$refs)
        this.isMounted = true;
        window.addEventListener('scroll', this.setIsScrolled, { passive: true })
        this.setIsScrolled()
        await this.$store.dispatch("fetchInlifeInfo")
    },
    unmounted() {
        window.removeEventListener('scroll', this.setIsScrolled, { passive: true })
    },
    computed: {
        pixels() {
            const height = this.isScrolled
            if (height >= 520) {
                return 100
            }
            return 620 - (height)
        },
        debuggers() {
            return this.isScrolled
        },
        bgc() {
            const height = this.isScrolled
            const perc = height / 520
            if (perc < 1) {
                return perc
            }
            return 1
        },
        shadow() {
            const height = this.isScrolled
            const perc = height / 520
            if (perc > 1) {
                return 0.4
            }
            if (perc < 0) {
                return 0
            }

            return perc * 0.4
        }
    },

    methods: {
        openHamburgerMenu() {
            this.$store.commit("openHamburgerMenu")
        },
        setIsScrolled() {
            this.isScrolled = window.scrollY
        },
        async goHome() {
            const is_home_page = this.$router.currentRoute._value.name === "home"
            // console.log(is_home_page)
            if (!(is_home_page)) {
                await this.$router.push({ name: "home" })
            }
            const header = document.getElementById("header-bg")
            // const block = await document.getElementById(id)
            console.log(header.offsetHeight)
            // console.log(block.offsetTop)

            if (!(is_home_page)) {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    // behavior: 'smooth'
                });
            } else {
                window.scrollTo({
                    top: 0,
                    left: 0,
                    behavior: 'smooth'
                });
            }
            if (this.$store.getters.isOpenedHamburgerMenu) {
                this.$store.commit("closeHamburgerMenu")
            }
        }
    }
}
</script>

<style lang="css" scoped>
.header-test .cont {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1200px;
}

.socials {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
}

.socials li {
    background-color: #fff;
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 12px;
    box-sizing: border-box;
    cursor: pointer;
}

.socials li img {
    height: 26px;
}

.logo {
    display: flex;
    align-items: flex-start;
    cursor: pointer;
}

.logo img {
    height: 90px;
}

.nav-bar {
    display: flex;
    gap: 16px;
    padding: 0 20px;
    flex-grow: 1;
    /* align-items: end; */
    justify-content: flex-end;
}

.nav-bar li {
    cursor: pointer;
    color: #fff;
}

.nav-bar li:hover .under-slash .slash {
    width: 100%;
}

.under-slash {
    width: 100%;
    height: 2px;
    margin-top: 6px;
    display: flex;
    justify-content: center;
}

.under-slash .slash {
    background-color: var(--new-violet-color);
    height: 100%;
    border-radius: 2px;
    width: 0%;
    transition: all .5s;
}
</style>
