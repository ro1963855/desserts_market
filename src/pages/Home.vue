<template>
  <div class="home">
    <dm-introduce/>
  </div>
</template>

<script>
import DmIntroduce from '@/components/DmIntroduce';

export default {
  name: 'home',
  components: {
    DmIntroduce,
  },
  props: [],
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
