<template>
  <div id="app">
    <dm-navbar />
    <router-view />
    <dm-notification />
    <dm-footer />
  </div>
</template>

<script>
import DmNavbar from "@/components/DmNavbar";
import DmNotification from "@/components/DmNotification";
import DmFooter from "@/components/DmFooter";

export default {
  name: "App",
  components: {
    DmNavbar,
    DmNotification,
    DmFooter
  }
};
</script>
