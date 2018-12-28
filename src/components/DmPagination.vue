<template>
  <div class="dmPagination">
    <nav>
      <ul class="pagination">
        <li class="page-item">
          <a
            class="page-link"
            href="javascript:;"
            aria-label="Previous"
            @click="prePage"
          >
            <span aria-hidden="true">
              <font-awesome-icon :icon="['fas', 'caret-left']"></font-awesome-icon>
            </span>
            <span class="sr-only">Previous</span>
          </a>
        </li>
        <li
          class="page-item"
          :class="{'active': pageSelected === pageIndex}"
          v-for="pageIndex in totoalPageNumber"
          :key="pageIndex"
          @click="$emit('changePage', pageIndex)"
        >
          <a
            class="page-link"
            href="javascript:;"
          >
            <span>{{ pageIndex }}</span>
          </a>
        </li>
        <li class="page-item">
          <a
            class="page-link"
            href="javascript:;"
            aria-label="Next"
            @click="nextPage"
          >
            <span aria-hidden="true">
              <font-awesome-icon :icon="['fas', 'caret-right']"></font-awesome-icon>
            </span>
            <span class="sr-only">Next</span>
          </a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: "dmPagination",
  components: {},
  props: ["totoalPageNumber", "pageSelected"],
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
    nextPage() {
      const vm = this;
      const nextPage = vm.pageSelected + 1;
      if (nextPage > vm.totoalPageNumber) {
        return;
      }

      vm.$emit("changePage", nextPage);
    },
    prePage() {
      const vm = this;
      const prePage = vm.pageSelected - 1;
      if (prePage < 1) {
        return;
      }

      vm.$emit("changePage", prePage);
    }
  }
};
</script>
