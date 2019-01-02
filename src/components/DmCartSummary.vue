<template>
  <div class="dmCartSummary">
    <div class="subtitle-column d-md-none">
      <span>訂單摘要</span>
    </div>
    <div class="sumary-detail">
      <div class="summary-title d-none d-md-block">訂單摘要</div>
      <div class="summary-pay-list">
        <div class="d-flex mb-2">
          <span class="sub-desc">小計</span>
          <span class="sub-desc ml-auto">NT$ {{totalProductPrice}}</span>
        </div>
        <div class="d-flex mb-4">
          <span class="sub-desc">運費</span>
          <span class="sub-desc ml-auto">NT$ {{sendPrice}}</span>
        </div>
        <div class="d-flex">
          <span class="main-desc">總計</span>
          <span class="main-desc ml-auto">NT$ {{totalProductPrice + sendPrice}}</span>
        </div>
      </div>
    </div>
    <div class="checkout-action">
      結帳
    </div>
  </div>
</template>

<script>
// import ComponetName from "@/components/ComponetName";

export default {
  name: "dmCartSummary",
  components: {},
  props: ["totalProductPrice"],
  data() {
    return {
      sendPrice: 300
    };
  },
  created() {},
  mounted() {},
  computed: {
    // variable() {},
  },
  watch: {
    // variable(new, old) {}
    // variable: {
    //   handler() {},
    //   deep: true,
    // },
  },
  methods: {
    // foo() {},
  }
};
</script>
