<template>
  <div class="select-cover">
    <select :id="id" :name="name" @change="selected" v-model="value">
      <option v-if="isFilter" value="">Todas as opções</option>
      <option v-else value="">Selecione</option>
      <option
        v-for="option in options"
        :key="option.value"
        :value="option.value"
      >
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Option } from "@/types/Option";

@Component
export default class Select extends Vue {
  @Prop() public options!: Option[];
  @Prop() public id!: String;
  @Prop() public name!: String;
  @Prop() public isFilter!: Boolean;

  public value: string = "";

  public selected(): void {
    this.$emit("change", this.value);
  }
}
</script>

<style lang="scss">
.select-cover {
  select {
    background-color: #fff;
    border: #000 1px solid;
    color: #3f3f3f;
    font-size: 18px;
    height: 35px;
    line-height: 1;
  }
  select[type="text"]:focus-visible {
    outline: none;
  }
}
</style>
