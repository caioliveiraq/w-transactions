<template>
  <div>
    <div class="progress">
      <div :class="`progress__bar ${statusClass}`" id="progress-bar"></div>
    </div>
    <div class="description">
      <span>Solicitado</span>
      <span>Processando</span>
      <span>Concluído</span>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Watch } from "vue-property-decorator";

@Component
export default class ProgressBar extends Vue {
  @Prop() public status!: string;

  get statusClass(): string {
    switch (this.status) {
      case "created":
        return "w0";
      case "processing":
        return "w50";
      case "processed":
        return "w100";
    }
    return "";
  }
}
</script>
<style lang="scss">
.progress {
  border: 1px solid;

  &__bar {
    background-color: #ee2e5d;
    color: #3f3f3f;
    height: 24px;
  }

  .w0 {
    width: 0;
  }

  .w50 {
    width: 50%;
  }

  .w100 {
    width: 100%;
  }
}

.description {
  display: grid;
  color: #3f3f3f;
  font-weight: bold;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 5px 0 20px;
  text-align: center;
}
</style>
