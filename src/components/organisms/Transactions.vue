<template>
  <div class="transactions">
    <Filters @status="changeStatus" @title="changeTitle" />
    <DataSheet @open="openModal" :transactionsData="transactionsFilter" />
    <Modal
      :parameters="transactionPicked"
      v-if="showModal"
      @close="showModal = false"
    />
  </div>
</template>

<script lang="ts">
import axios from "axios";
import { Component, Vue } from "vue-property-decorator";
import Filters from "@/components/molecules/Filters.vue";
import DataSheet from "@/components/molecules/DataSheet.vue";
import Modal from "@/components/molecules/Modal.vue";
import { Transaction } from "@/types/Transaction";

@Component({
  components: {
    Filters,
    DataSheet,
    Modal,
  },
})
export default class Transactions extends Vue {
  public showModal: boolean = false;

  public transactionPicked!: Transaction;

  public transactionsData: Transaction[] = [];
  public transactionsFilter: Transaction[] = [];
  public titleFilter: string = "";

  mounted() {
    axios
      .get("https://warren-transactions-api.herokuapp.com/api/transactions")
      .then((response) => {
        this.transactionsData = response.data as Transaction[];
        this.transactionsFilter = response.data as Transaction[];
      });
  }

  public async changeStatus(status: string) {
    const param: string = status ? `status=${status}` : "";
    await axios
      .get(
        `https://warren-transactions-api.herokuapp.com/api/transactions?${param}`
      )
      .then((response) => {
        this.transactionsData = response.data as Transaction[];
        this.changeTitle(this.titleFilter);
      });
  }

  public async changeTitle(title: string) {
    this.titleFilter = title;
    if (title) {
      this.transactionsFilter = await this.transactionsData.filter((items) => {
        return items.title.toLowerCase().indexOf(title) > -1;
      });
    } else {
      this.transactionsFilter = this.transactionsData;
    }
  }

  public async openModal(id: string) {
    await axios
      .get(
        `https://warren-transactions-api.herokuapp.com/api/transactions/${id}`
      )
      .then(
        (response) => (this.transactionPicked = response.data as Transaction)
      );
    this.showModal = true;
  }
}
</script>

<style lang="scss">
.transactions {
  font-family: Helvetica;
  margin: auto;
  padding-top: 100px;
  width: 80%;
}
</style>
