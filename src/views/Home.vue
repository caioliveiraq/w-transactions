<template>
  <div>
    <Header />
    <Transactions />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "@/components/molecules/Header.vue";
import Transactions from "@/components/organisms/Transactions.vue";

@Component({
  components: {
    Header,
    Transactions,
  },
})
export default class Home extends Vue {}
</script>
