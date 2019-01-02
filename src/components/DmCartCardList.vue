<template>
  <div class="dmCartCardList">
    <ul>
      <li
        v-for="(card, index) in cardlist"
        :key="`card_${index}`"
      >
        <div class="card-body">
          <div
            :style="{ 'backgroundImage': 'url(' + card.imgSrc + ')' }"
            class="product-img"
          ></div>

          <div class="card-desc">
            <p>{{ card.title }}</p>
            <p>{{ `NT$ ${card.price}` }}</p>
            <b-input-group class="card-number-counter d-md-none d-flex">
              <b-input-group-prepend>
                <b-btn @click="card.number -= 1">-</b-btn>
              </b-input-group-prepend>
              <b-form-input v-model="card.number" />
              <b-input-group-append>
                <b-btn @click="card.number += 1">+</b-btn>
              </b-input-group-append>
            </b-input-group>
          </div>

          <b-input-group class="card-number-counter d-md-flex d-none">
            <b-input-group-prepend>
              <b-btn @click="card.number -= 1">-</b-btn>
            </b-input-group-prepend>
            <b-form-input v-model="card.number" />
            <b-input-group-append>
              <b-btn @click="card.number += 1">+</b-btn>
            </b-input-group-append>
          </b-input-group>

          <div class="card-total-price d-md-flex d-none">
            <p>{{ `NT$ ${card.number * card.price}` }}</p>
          </div>

          <div class="delet-icon">
            <span>
              <font-awesome-icon :icon="['far', 'trash-alt']"></font-awesome-icon>
            </span>
          </div>

        </div>
        <div class="card-total-price-bottom d-md-none text-right">
          <p>{{ `NT$ ${card.number * card.price}` }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "dmCartCardList",
  components: {},
  props: ["totalProductPrice"],
  data() {
    return {
      cardlist: [
        {
          imgSrc: require("@/assets/img/dessert/brenda-godinez-367708-unsplash.jpg"),
          title: "焦糖馬卡龍",
          price: 450,
          number: 1
        },
        {
          imgSrc: require("@/assets/img/dessert/food-photographer-jennifer-pallian-650641-unsplash.jpg"),
          title: "焦糖馬卡龍",
          price: 450,
          number: 2
        },
        {
          imgSrc: require("@/assets/img/dessert/brooke-lark-96398-unsplash.jpg"),
          title: "焦糖馬卡龍",
          price: 450,
          number: 4
        }
      ]
    };
  },
  created() {},
  mounted() {},
  computed: {
    // variable() {},
    countProductPrice() {
      const vm = this;
      let totalPrice = 0;
      for (let i = 0; i < vm.cardlist.length; i += 1) {
        totalPrice += vm.cardlist[i].price * vm.cardlist[i].number;
      }

      return totalPrice;
    }
  },
  watch: {
    countProductPrice: {
      handler() {
        const vm = this;
        vm.$emit("update:totalProductPrice", vm.countProductPrice);
      },
      immediate: true
    }
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
