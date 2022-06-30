<template>
  <div class="input-cover">
    <input
      :id="id"
      type="text"
      placeholder="Buscar"
      @keyup="textChange"
      v-model="searchValue"
    />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Input extends Vue {
  @Prop() public search!: string;
  @Prop() public id!: string;

  public searchValue: string = "";

  public textChange() {
    this.$emit("change", this.searchValue);
  }
}
</script>

<style lang="scss">
.input-cover {
  input[type="text"] {
    height: 30px;
    font-size: 18px;
    line-height: 1;
    background-color: white;
    color: #3f3f3f;
    border: black 1px solid;
  }

  input[type="text"]:focus-visible {
    outline: none;
  }
}
</style>
