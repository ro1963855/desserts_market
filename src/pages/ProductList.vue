<template>
  <div class="productList">
    <div class="banner">
      <img src="~@/assets/img/material/lg-為什麼選擇了做甜點.svg">
    </div>
    <div class="body">
      <div class="menu">
        <div class="menu-header">甜點類別</div>
        <ul>
          <li
            v-for="(product, productIndex) in productlist"
            :key="productIndex"
            class="product-type"
            :class="{'active': productIndex === productTypeSelected}"
            @click="changeFoodType(productIndex)"
          >{{ product.type }} ({{ product.data.length }})</li>
        </ul>
      </div>
      <div
        class="list container-fluid"
        ref="list"
      >
        <div class="row">
          <div
            class="col-sm-6 col-xs-12"
            v-for="(foodCard, foodCardIndex) in listData"
            :key="foodCardIndex"
          >
            <dm-food-card :foodCard="foodCard"></dm-food-card>
          </div>
        </div>
      </div>
    </div>
    <dm-pagination
      v-if="totoalPageNumber > 1"
      :totoalPageNumber="totoalPageNumber"
      :pageSelected="pageSelected"
      @changePage="changePage"
    />
    <div class="clearfix"></div>
  </div>
</template>

<script>
import DmFoodCard from "@/components/DmFoodCard";
import DmPagination from "@/components/DmPagination";
import foodData from "@/data/productList/food";

export default {
  name: "productList",
  components: {
    DmFoodCard,
    DmPagination
  },
  props: [],
  data() {
    return {
      productlist: foodData.productlist,
      productTypeSelected: 0,
      pageSelected: 1,
      perPageItemNumber: 6
    };
  },
  created() {},
  mounted() {},
  computed: {
    listData() {
      const start = (this.pageSelected - 1) * this.perPageItemNumber;
      const end = this.pageSelected * this.perPageItemNumber;
      return this.productlist[this.productTypeSelected].data.slice(start, end);
    },
    totoalPageNumber() {
      return Math.ceil(
        this.productlist[this.productTypeSelected].data.length /
          this.perPageItemNumber
      );
    }
  },
  watch: {
    // variable(new, old) {}
    // variable: {
    //   handler() {},
    //   deep: true,
    // },
  },
  methods: {
    changeFoodType(productIndex) {
      const vm = this;
      vm.productTypeSelected = productIndex;
      vm.pageSelected = 1;
    },
    changePage(val) {
      const vm = this;
      vm.pageSelected = val;
      window.scrollTo(0, vm.$refs.list.offsetTop - 30);
    }
  }
};
</script>
