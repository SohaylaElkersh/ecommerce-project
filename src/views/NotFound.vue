<template>
    <div class="not-found">
      <BreadcrumbHeader class="not-found__breadcrumb"/>
      <div class="not-found__content">
        <h1 class="not-found__title">404 Not Found</h1>
        <p class="not-found__text">You visited not found page. you may go home page.</p>
        <router-link to="/" class="not-found__button">Back to home page</router-link>
      </div>
    </div>
</template>

<script setup>
import BreadcrumbHeader from '@/components/navigation/BreadcrumbHeader.vue';
</script>

<style lang="scss">
@import "@/assets/styles/pages/NotFound.scss";
</style>