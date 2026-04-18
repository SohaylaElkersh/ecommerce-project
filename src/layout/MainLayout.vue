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

<style scoped>
.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh; 
  padding: 0;
  margin: 0;
}

.layout__main {
  flex: 1;
}
</style>