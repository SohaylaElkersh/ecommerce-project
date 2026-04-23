<template>
  <div class="layout">
    <AppNavbar />

    <main class="layout__main">
      <router-view />
    </main>

    <AppFooter />
  </div>
</template>

<script setup>
import AppNavbar from "@/components/layout/Navbar.vue";
import AppFooter from "@/components/layout/AppFooter.vue";
</script>

<style lang="scss">
@import "@/assets/styles/layout/MainLayout.scss";
</style>



// Component Purpose:
// Defines the global layout structure of the application,
// wrapping all pages with a consistent header and footer.