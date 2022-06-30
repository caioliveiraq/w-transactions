<template>
  <div class="header">
    <div class="header__logo"><img src="@/assets/logo.svg" /></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Header extends Vue {}
</script>

<style lang="scss">
.header {
  background: #ee2e5d;
  border-bottom: #9599a6 solid;
  box-shadow: 0 2px 5px black;
  color: #fff;
  display: block;
  height: 100px;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;

  &__logo {
    padding: 25px 50px;

    img {
      height: 50px;
    }
  }
}
</style>
