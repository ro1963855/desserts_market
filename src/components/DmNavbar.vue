<template>
  <div class="dmNavbar">
    <b-navbar toggleable="sm" type="light">
      <font-awesome-icon  v-b-toggle.nav_collapse
                          :icon="['fas', 'bars']"
                          class="collapse-icon"></font-awesome-icon>
      <b-navbar-brand href="#" class="brand-href">
        <img  src="~@/assets/img/material/logo-dark.svg"
              class="align-top brand-logo d-none d-sm-block">
        <img src="~@/assets/img/material/logotype.svg" class="d-inline-block align-top brand-name">
      </b-navbar-brand>
      <font-awesome-icon  :icon="['fas', 'shopping-cart']"
                          class="cart-icon sm-lower"></font-awesome-icon>
      <b-collapse is-nav id="nav_collapse">
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item v-for= "(menu, index) in menus"
                      :key="index"
                      :to=" menu.router"
                      class="navbar-page-linker"
                      :class="{active: isActivePage(menu.router.name)}">{{menu.name}}</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
      <font-awesome-icon  :icon="['fas', 'shopping-cart']"
                          class="cart-icon d-none d-sm-block"></font-awesome-icon>
    </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'dmNavbar',
  components: {},
  props: [],
  data() {
    return {
      currentRouterName: '',
      menus: [
        {
          name: '首頁',
          router: { name: 'Home' },
        },
        {
          name: '甜點',
          router: { name: '1' },
        },
        {
          name: '登入',
          router: { name: '2' },
        },
      ],
    };
  },
  created() {
    this.currentRouterName = this.$route.name;
  },
  mounted() {},
  computed: {
    // variable() {},
  },
  watch: {
    $route() {
      this.currentRouterName = this.$route.name;
    },
  },
  methods: {
    isActivePage(pageName) {
      return pageName === this.currentRouterName;
    },
  },
};
</script>
