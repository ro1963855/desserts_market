<template>
  <div class="dmMemberLogin">
    <div class="form">
      <div class="title">
        <span>會員登入</span>
      </div>
      <div class="community">
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
      <div class="formList">
        <div class="input-group dm-input">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'user']"
              ></font-awesome-icon>
            </span>
          </div>
          <input
            type="text"
            placeholder="電子信箱/手機號碼"
            class="form-control"
          >
        </div>
        <div class="input-group dm-input">
          <div class="input-group-prepend">
            <span class="input-group-text">
              <font-awesome-icon
                class="icon"
                :icon="['fas', 'key']"
              ></font-awesome-icon>
            </span>
          </div>
          <input
            type="text"
            placeholder="請輸入使用者密碼"
            class="form-control"
          >
        </div>
        <div class="form-group form-check dm-input">
          <input
            type="checkbox"
            class="form-check-input"
            id="remember-me"
          >
          <label
            class="form-check-label"
            for="remember-me"
          >記住我</label>
        </div>
      </div>
    </div>
    <router-link
      class="action"
      :to="homeRouter.router"
    >
      <span>登入帳號</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "dmMemberLogin",
  components: {},
  props: [],
  data() {
    return {
      homeRouter: {
        router: { name: "Home" }
      },
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
