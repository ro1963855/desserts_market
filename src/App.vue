<template>
  <div id="app">
    <dm-navbar/>
    <router-view/>
    <dm-notification/>
  </div>
</template>

<script>
import DmNavbar from '@/components/DmNavbar';
import DmNotification from '@/components/DmNotification';

export default {
  name: 'App',
  components: {
    DmNavbar,
    DmNotification,
  },
};
</script>
