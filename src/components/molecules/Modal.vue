<template>
  <div class="modal">
    <div class="modal__content">
      <span class="close" @click="$emit('close')">&times;</span>
      <div class="title" id="modal-title">
        {{ parameters.title }}
      </div>
      <ProgressBar :status="parameters.status" />
      <div class="process">
        <div class="process__title">Tranferido de</div>
        <div class="process__description">
          <span>{{ parameters.from }}</span>
          <span>R$ {{ parameters.amount }}</span>
        </div>
      </div>
      <div class="process">
        <div class="process__title">Para</div>
        <div class="process__description">
          <span>{{ parameters.to }}</span>
          <span>R$ {{ parameters.amount }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ProgressBar from "@/components/atoms/ProgressBar.vue";
import { Transaction } from "@/types/Transaction";

@Component({
  components: {
    ProgressBar,
  },
})
export default class Modal extends Vue {
  @Prop() public parameters!: Transaction;
}
</script>

<style lang="scss">
.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgb(0, 0, 0);
  background-color: rgba(0, 0, 0, 0.4);

  &__content {
    background-color: white;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 50%;

    .title {
      color: #ee2e5d;
      font-size: 25px;
      font-weight: bold;
      margin: 10px 0 20px;
      text-align: center;
    }

    .process {
      display: grid;
      grid-template-columns: 1fr;
      padding-bottom: 20px;

      &__title {
        color: #ee2e5d;
        border-bottom: 1px solid;
        font-size: 22px;
        font-weight: bold;
        margin-bottom: 10px;
      }

      &__description {
        display: grid;
        font-size: 18px;
        grid-template-columns: 1fr max-content;
      }
    }

    .close {
      display: flex;
      color: #aaa;
      float: right;
      font-size: 28px;
      font-weight: bold;
    }

    .close:hover,
    .close:focus {
      color: black;
      text-decoration: none;
      cursor: pointer;
    }
  }
}
</style>
