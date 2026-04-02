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
import AppNavbar from "./Navbar.vue";
import AppFooter from "./Footer.vue";

export default {
  name: "MainLayout",
  components: {
    AppNavbar,
    AppFooter
  }
}
</script>

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* full viewport height */
}

.layout__main {
  flex: 1;
}
</style>