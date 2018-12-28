<template>
  <div class="dmFoodCard">
    <div
      class="foodImg"
      :style="{ 'backgroundImage': 'url(' + foodCard.src + ')' }"
    >
      <div class="tag"><span>本日精選</span></div>
      <font-awesome-icon
        :icon="['far', 'heart']"
        class="like-icon"
      ></font-awesome-icon>
    </div>
    <div class="foodDesc">
      <div class="foodName">{{ foodCard.foodName }}</div>
      <div class="foodPrice">NT$ {{ foodCard.price }}</div>
    </div>
    <button
      type="button"
      class="foodBtn"
    >加入購物車</button>
  </div>
</template>

<script>
export default {
  name: "dmFoodCard",
  components: {},
  props: ["foodCard"],
  data() {
    return {};
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
