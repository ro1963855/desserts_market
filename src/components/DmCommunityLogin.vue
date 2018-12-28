<template>
  <div class="dmCommunityLogin">
    <span class="title">—— 連結社群帳號 ——</span>
    <ul>
      <li
        class="community-item"
        v-for="(src, srcIndex) in communitySrc"
        :key="srcIndex"
      >
        <router-link
          :to="{ name: 'Home' }"
          class="w-100"
        >
          <img :src="src">
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "dmCommunityLogin",
  components: {},
  props: [],
  data() {
    return {
      communitySrc: [
        require("@/assets/img/material/ic-facebook-logotype.svg"),
        require("@/assets/img/material/ic-google.svg"),
        require("@/assets/img/material/ic-yahoo.svg")
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
