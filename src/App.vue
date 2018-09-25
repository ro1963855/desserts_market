<template>
  <div id="app">
    <dm-navbar/>
    <router-view/>
  </div>
</template>

<script>
import DmNavbar from '@/components/DmNavbar';

export default {
  name: 'App',
  components: {
    DmNavbar,
  },
};
</script>
