<template>
  <div  class="dmRecommendCard"
        :class="{active: index === selected}"
        @click="$emit('update:selected', index)">
    <div class="color-bgc"></div>
    <div class="image-bgc" :style="{ 'backgroundImage': 'url(' + card.src + ')' }"></div>
    <h1>{{ card.name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'dmRecommendCard',
  components: {},
  props: ['card', 'index', 'selected'],
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
  },
};
</script>
