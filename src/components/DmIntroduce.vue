<template>
  <div class="dmIntroduce">
    <div class="banner"></div>
    <div class="recommend">
      <dm-recommend-card
        v-for="(card, index) in recommendCards"
        v-bind:key="index"
        :card="card"
        :index="index"
        :selected.sync="selected"
      />
    </div>
    <div class="desc">
      <img
        src="~@/assets/img/material/lg-為什麼選擇了做甜點.svg"
        class="desc-lg-word desc-lg-word_1"
      >
      <img
        src="~@/assets/img/material/sm-為什麼選擇了做甜點.svg"
        class="desc-sm-word"
      >
      <div
        :style="{ 'backgroundImage': 'url(' + descs[0].src + ')' }"
        class="desc-img desc-img-1"
      ></div>
      <div class="desc-bgc">
        <div class="desc-content desc-content_1">
          <p>青山依舊在，幾度夕陽紅。慣看秋月春風。</p>
          <p>一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p>
          <p>是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p>
        </div>
      </div>
    </div>
    <div class="desc">
      <img
        src="~@/assets/img/material/lg-為什麼一定要吃甜點.svg"
        class="desc-lg-word desc-lg-word_2"
      >
      <img
        src="~@/assets/img/material/sm-為什麼一定要吃甜點.svg"
        class="desc-sm-word"
      >
      <div
        :style="{ 'backgroundImage': 'url(' + descs[1].src + ')' }"
        class="desc-img desc-img-2"
      ></div>
      <div class="desc-bgc">
        <div class="desc-content desc-content_2">
          <p>青山依舊在，幾度夕陽紅。慣看秋月春風。</p>
          <p>一壺濁酒喜相逢，浪花淘盡英雄。是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p>
          <p>是非成敗轉頭空，滾滾長江東逝水，白髮漁樵江渚上，古今多少事，都付笑談中。</p>
        </div>
      </div>
    </div>
    <div class="desc-footer">
      <img
        src="~@/assets/img/material/lg-想吃甜點是不需要理由的.svg"
        class="desc-lg-word"
      >
      <img
        src="~@/assets/img/material/sm-想吃甜點是不需要理由的-1.svg"
        class="desc-sm-word"
      >
    </div>
    <div class="container-fluid">
      <div class="row">
        <div
          class="col"
          :class="{'d-none d-sm-block': foodCardIndex !== 0}"
          v-for="(foodCard, foodCardIndex) in foodCards"
          v-bind:key="foodCardIndex"
        >
          <dm-food-card :foodCard="foodCard"></dm-food-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DmRecommendCard from "@/components/DmRecommendCard";
import DmFoodCard from "@/components/DmFoodCard";

export default {
  name: "dmIntroduce",
  components: {
    DmRecommendCard,
    DmFoodCard
  },
  props: [],
  data() {
    return {
      selected: 0,
      recommendCards: [
        {
          name: "本日精選",
          src: require("@/assets/img/dessert/brooke-lark-230642-unsplash.jpg")
        },
        {
          name: "人氣推薦",
          src: require("@/assets/img/dessert/whitney-wright-356670-unsplash.jpg")
        },
        {
          name: "新品上市",
          src: require("@/assets/img/dessert/food-photographer-jennifer-pallian-306919-unsplash.jpg")
        }
      ],
      descs: [
        {
          src: require("@/assets/img/dessert/le-buzz-576478-unsplash.jpg")
        },
        {
          src: require("@/assets/img/dessert/monika-grabkowska-325047-unsplash.jpg")
        }
      ],
      foodCards: [
        {
          foodName: "焦糖馬卡龍",
          price: 450,
          src: require("@/assets/img/dessert/heather-schwartz-493946-unsplash.jpg")
        },
        {
          foodName: "草莓蛋糕",
          price: 520,
          src: require("@/assets/img/dessert/food-photographer-jennifer-pallian-650641-unsplash.jpg")
        },
        {
          foodName: "藍莓塔",
          price: 600,
          src: require("@/assets/img/dessert/rezel-apacionado-362238-unsplash.jpg")
        }
      ]
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
