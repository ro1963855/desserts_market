<template>
  <div class="cart">
    <div class="row">
      <div class="shopping-list col-md-8 col-sm-12">
        <div class="subtitle-column">
          <span>您的購物車</span>
        </div>
        <dm-cart-card-list :totalProductPrice.sync="totalProductPrice" />
      </div>
      <div class="col-md-4 col-sm-12">
        <dm-cart-summary :totalProductPrice="totalProductPrice" />
      </div>
    </div>
  </div>
</template>

<script>
import DmCartCardList from "@/components/DmCartCardList";
import DmCartSummary from "@/components/DmCartSummary";

export default {
  name: "cart",
  components: {
    DmCartCardList,
    DmCartSummary
  },
  props: [],
  data() {
    return {
      totalProductPrice: 0
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
