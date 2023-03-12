<template lang="html">
  <div>
    <a class="transparent">
      <p>
        <span class="bg"/>
        <span class="base"/>
        <span class="text">
          {{text}}
        </span>
      </p>
    </a>
  </div>
</template>

<script>
export default {
  props:{
    text: String,
  }
}
</script>

<style lang="scss" scoped>
$base: rgba(0,0,0,0);
$white: #ece8e1;
$pink: #8a2cff;
$height: 40px;
$transition: 0.3s ease-out all;

body {
  background: $base;
  font-family: "Muli";
}

div {
  display: flex;
  width: 200px;
  flex-flow: column;
  cursor: pointer;
  margin-bottom: 14px;
  & a {
    width: 100%;
    max-width: 240px;
    height: $height;
    padding: 8px;
    font-size: 10px;
    font-weight: 900;
    color: $pink;
    text-align: center;
    text-transform: uppercase;
    text-decoration: none;
    box-shadow: 0 0 0 1px inset rgba($white, 0.3);
    position: relative;
    &.white:hover > p {
      color: $white;
    }
    &.white > p {
      background: $white;
      color: $base;
      & span.base {
        border: 1px solid transparent;
      }
    }
    &.transparent:hover > p {
      color: $white;
      & span.text {
        box-shadow: 0 0 0 1px $white;
      }
    }
    &.transparent > p {
      background: $base;
      color: $white;
      & span.base {
        border: 1px solid $white;
      }
    }
    &:after,
    &:before {
      content: "";
      width: 1px;
      position: absolute;
      height: 8px;
      background: $base;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    &:before {
      right: 0;
      left: initial;
    }
    & p {
      margin: 0;
      height: $height;
      line-height: $height;
      box-sizing: border-box;
      z-index: 1;
      left: 0;
      width: 100%;
      position: relative;
      overflow: hidden;
      & span.base {
        top: 0;
        box-sizing: border-box;
        position: absolute;
        z-index: 2;
        width: 100%;
        height: 100%;
        left: 0;
        border: 1px solid $pink;
        &:before {
          content: "";
          width: 2px;
          height: 2px;
          left: -1px;
          top: -1px;
          background: $base;
          position: absolute;
          transition: $transition;
        }
      }
      & span.bg {
        left: -5%;
        position: absolute;
        background: $pink;
        width: 0;
        height: 100%;
        z-index: 3;
        transition: $transition;
        transform: skewX(-10deg);
        top: 0;
      }
      & span.text {
        z-index: 4;
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        &:after {
          content: "";
          width: 4px;
          height: 4px;
          right: 0;
          bottom: 0;
          background: $base;
          position: absolute;
          transition: $transition;
          z-index: 5;
        }
      }
    }
    &:hover {
      color: $white;
      & span.bg {
        width: 110%;
      }
      & span.text:after {
        background: $white;
      }
    }
  }
}
</style>
