<template lang="html">
  <Transition name="fade">
    <div class="loader" v-if="$store.getters.isActiveFullLoader">
      <!-- Google Chrome -->
      <div class="infinityChrome">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <!-- Safari and others -->
      <div class="infinity">
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
      </div>

      <!-- Stuff -->
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: none;">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <!-- dribbble -->
      <a class="dribbble" href="https://dribbble.com/shots/5557955-Infinity-Loader" target="_blank"><img
          src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg"
          alt=""></a>

    </div>
  </Transition>
  <Transition name="fade-semi">
    <div class="semi-loader" v-if="$store.getters.isActiveSemiLoader">
      <!-- Google Chrome -->
      <div class="infinityChrome">
        <div></div>
        <div></div>
        <div></div>
      </div>

      <!-- Safari and others -->
      <div class="infinity">
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <span></span>
        </div>
      </div>

      <!-- Stuff -->
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" style="display: none;">
        <defs>
          <filter id="goo">
            <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
            <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="goo" />
            <feBlend in="SourceGraphic" in2="goo" />
          </filter>
        </defs>
      </svg>

      <!-- dribbble -->
      <a class="dribbble" href="https://dribbble.com/shots/5557955-Infinity-Loader" target="_blank"><img
          src="https://cdn.dribbble.com/assets/dribbble-ball-mark-2bd45f09c2fb58dbbfb44766d5d1d07c5a12972d602ef8b32204d28fa3dda554.svg"
          alt=""></a>

    </div>
  </Transition>
</template>
  
<script>
export default {
}
</script>

<style lang="css" scoped>
.fade-enter-active {
  transition: all 0.3s ease-out;
}

.fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.fade-enter-from{
  opacity: 1;
}
.fade-leave-to {
  /* transform: translateX(20px); */
  opacity: 0;
}

.fade-semi-enter-active {
  transition: all 0.3s ease-out;
}

.fade-semi-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.fade-semi-enter-from,
.fade-semi-leave-to {
  /* transform: translateX(20px); */
  opacity: 0;
}

button {
  background-color: #fff;
}

.gavno {
  position: fixed;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  display: flex;
  z-index: 99999;
  font-size: 50px;
  color: #fff;
  /* background-color: #fff; */
}
</style>
  
<style lang="scss" scoped>
.semi-loader{
  z-index: 9999;
  height: 100%;
  width: 100%;
  position: fixed;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  background-color: rgba(10, 10, 10, .6);
  backdrop-filter: blur(2px)
}
.loader {
  // opacity: 100%;
  // display: flex;
  // position: fixed;
  // align-items: center;
  // justify-content: center;
  // width: 100%;
  // height: 100%;
  // // // display: none;
  // background-color: var(--bg-color);
  z-index: 9999;
  height: 100%;
  width: 100%;
  position: fixed;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -ms-align-items: center;
  align-items: center;
  justify-content: center;
  background-color: rgba(10, 10, 10, 1);
  backdrop-filter: blur(4px)
}



$color: #8C6FF0;
$colorRight: #5628EE;
$colorLeft: #23C4F8;

.infinity {
  width: 120px;
  height: 60px;
  position: relative;

  div,
  span {
    position: absolute;
  }

  div {
    top: 0;
    left: 50%;
    width: 60px;
    height: 60px;
    animation: rotate 6.9s linear infinite;

    span {
      left: -8px;
      top: 50%;
      margin: -8px 0 0 0;
      width: 16px;
      height: 16px;
      display: block;
      background: $color;
      box-shadow: 2px 2px 8px rgba($color, .09);
      border-radius: 50%;
      transform: rotate(90deg);
      animation: move 6.9s linear infinite;

      &:before,
      &:after {
        content: '';
        position: absolute;
        display: block;
        border-radius: 50%;
        width: 14px;
        height: 14px;
        background: inherit;
        top: 50%;
        left: 50%;
        margin: -7px 0 0 -7px;
        box-shadow: inherit;
      }

      &:before {
        animation: drop1 .8s linear infinite;
      }

      &:after {
        animation: drop2 .8s linear infinite .4s;
      }
    }

    &:nth-child(2) {
      animation-delay: -2.3s;

      span {
        animation-delay: -2.3s;
      }
    }

    &:nth-child(3) {
      animation-delay: -4.6s;

      span {
        animation-delay: -4.6s;
      }
    }
  }
}

.infinityChrome {
  width: 128px;
  height: 60px;

  div {
    position: absolute;
    width: 16px;
    height: 16px;
    background: $color;
    box-shadow: 2px 2px 8px rgba($color, .09);
    border-radius: 50%;
    animation: moveSvg 6.9s linear infinite;
    -webkit-filter: url(#goo);
    filter: url(#goo);
    transform: scaleX(-1);
    offset-path: path("M64.3636364,29.4064278 C77.8909091,43.5203348 84.4363636,56 98.5454545,56 C112.654545,56 124,44.4117395 124,30.0006975 C124,15.5896556 112.654545,3.85282763 98.5454545,4.00139508 C84.4363636,4.14996252 79.2,14.6982509 66.4,29.4064278 C53.4545455,42.4803627 43.5636364,56 29.4545455,56 C15.3454545,56 4,44.4117395 4,30.0006975 C4,15.5896556 15.3454545,4.00139508 29.4545455,4.00139508 C43.5636364,4.00139508 53.1636364,17.8181672 64.3636364,29.4064278 Z");

    &:before,
    &:after {
      content: '';
      position: absolute;
      display: block;
      border-radius: 50%;
      width: 14px;
      height: 14px;
      background: inherit;
      top: 50%;
      left: 50%;
      margin: -7px 0 0 -7px;
      box-shadow: inherit;
    }

    &:before {
      animation: drop1 .8s linear infinite;
    }

    &:after {
      animation: drop2 .8s linear infinite .4s;
    }

    &:nth-child(2) {
      animation-delay: -2.3s;
    }

    &:nth-child(3) {
      animation-delay: -4.6s;
    }
  }
}

@keyframes moveSvg {
  0% {
    offset-distance: 0%;
  }

  25% {
    background: $colorRight;
  }

  75% {
    background: $colorLeft;
  }

  100% {
    offset-distance: 100%;
  }
}

@keyframes rotate {
  50% {
    transform: rotate(360deg);
    margin-left: 0;
  }

  50.0001%,
  100% {
    margin-left: -60px;
  }
}

@keyframes move {

  0%,
  50% {
    left: -8px;
  }

  25% {
    background: $colorRight;
  }

  75% {
    background: $colorLeft;
  }

  50.0001%,
  100% {
    left: auto;
    right: -8px;
  }
}

@keyframes drop1 {
  100% {
    transform: translate(32px, 8px) scale(0);
  }
}

@keyframes drop2 {
  0% {
    transform: translate(0, 0) scale(.9);
  }

  100% {
    transform: translate(32px, -8px) scale(0);
  }
}

// Demo

.infinity {
  display: none;
}

html {
  -webkit-font-smoothing: antialiased;
}

* {
  box-sizing: border-box;

  &:before,
  &:after {
    box-sizing: border-box;
  }
}

// Center & dribbble
body {
  min-height: 100vh;
  font-family: Roboto, Arial;
  color: #ADAFB6;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;

  .dribbble {
    position: fixed;
    display: block;
    right: 20px;
    bottom: 20px;

    img {
      display: block;
      height: 28px;
    }
  }
}
</style>
  