<template>
  <div class="login">
    <dm-member-login />
    <dm-community-login />
  </div>
</template>

<script>
import DmMemberLogin from "@/components/DmMemberLogin";
import DmCommunityLogin from "@/components/DmCommunityLogin";

export default {
  name: "login",
  components: {
    DmMemberLogin,
    DmCommunityLogin
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
  }
};
</script>
