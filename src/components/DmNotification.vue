<template>
  <div class="dmNotification">
    <div class="title">
      <img
        src="~@/assets/img/material/logo-light.svg"
        class="logo"
      >
      <p class="description">訂閱你我的甜蜜郵件</p>
    </div>
    <b-input-group class="mail-group">
      <b-input-group-prepend is-text>
        <font-awesome-icon
          :icon="['fas', 'envelope']"
          class="mail-icon"
        ></font-awesome-icon>
      </b-input-group-prepend>
      <b-form-input
        type="text"
        aria-label="Text input with checkbox"
      />
      <b-input-group-append>
        <b-btn class="mail-action">
          <font-awesome-icon
            :icon="['fas', 'arrow-right']"
            class="mail-icon"
          ></font-awesome-icon>
        </b-btn>
      </b-input-group-append>
    </b-input-group>
  </div>
</template>

<script>
export default {
  name: "dmNotification",
  components: {},
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
  }
};
</script>
