<template>
  <div class="datasheet">
    <div class="datasheet__header">
      <div>Título</div>
      <div>Descrição</div>
      <div>Status</div>
      <div>Valor</div>
    </div>
    <div class="datasheet__body">
      <div
        class="row"
        v-for="transaction in transactionsData"
        :key="transaction.id"
        @click="openModal(transaction.id)"
      >
        <div>{{ transaction.title }}</div>
        <div>{{ transaction.description }}</div>
        <div>{{ statusFilter(transaction.status) }}</div>
        <div>R${{ transaction.amount }}</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { Transaction } from "@/types/Transaction";
import { Status } from "@/types/Status";

@Component
export default class DataSheet extends Vue {
  @Prop() public transactionsData!: Transaction[];

  public statusData: Status = {
    created: "Solicitado",
    processing: "Processando",
    processed: "Concluído",
  };

  public openModal(id: string): void {
    this.$emit("open", id);
  }

  public statusFilter(status: string) {
    return this.statusData[status as keyof Status];
  }
}
</script>

<style lang="scss">
.datasheet {
  display: table;
  margin: auto;
  width: 100%;

  &__header {
    background: #ee2e5d;
    color: #e2e2e2;
    display: table-header-group;
    font-size: 18px;
    font-weight: bold;

    div {
      display: table-cell;
      padding: 10px;
      text-align: center;
    }
  }

  &__body {
    display: table-row-group;

    .row {
      display: table-row;
      height: 40px;
      div {
        border: 1px solid #afafaf;
        display: table-cell;
        text-align: center;
        vertical-align: middle;
      }
    }

    .row:hover {
      background-color: #e2e2e2;
      cursor: pointer;
    }
  }
}
</style>
