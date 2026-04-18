<template>
  <div class="layout">
    <AppNavbar />

    <main class="layout__main">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from "@/components/layout/Navbar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";

export default {
  name: "MainLayout",
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/layout/MainLayout.scss";
</style>