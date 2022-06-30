<template>
  <div class="filters">
    <Input id="title" @change="changeTitle" />
    <Select
      id="status"
      :isFilter="true"
      :options="statusOptions"
      @change="changeStatus"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Input from "@/components/atoms/Input.vue";
import Select from "@/components/atoms/Select.vue";
import { Option } from "@/types/Option";

@Component({
  components: {
    Input,
    Select,
  },
})
export default class Filters extends Vue {
  public statusOptions: Option[] = [
    { label: "Criado", value: "created" },
    { label: "Processando", value: "processing" },
    { label: "Solicitado", value: "processed" },
  ];

  public changeTitle(value: string): void {
    this.$emit("title", value.toLowerCase());
  }

  public changeStatus(value: string): void {
    this.$emit("status", value);
  }
}
</script>

<style lang="scss">
.filters {
  display: grid;
  gap: 30px;
  grid-template-columns: max-content 1fr;
  padding: 20px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
}
</style>
