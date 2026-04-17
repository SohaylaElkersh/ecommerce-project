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

<script>
import BreadcrumbHeader from '@/components/layout/shared/BreadcrumbHeader.vue';

export default {
  name: 'NotFound',
  components: {
    BreadcrumbHeader
  }
}
</script>

<style scoped>
.not-found {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.not-found__breadcrumb {
  margin: 20px 0 50px 150px;
}

.not-found__content {
  align-self: center;
  text-align: center;
  padding: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.not-found__title {
  font-size: 70px;
  color: #000;
  margin: 0;
  letter-spacing: 5px;
}

.not-found__text {
  font-size: 18px;
  color: #000;
}

.not-found__button {
  display: inline-block;
  padding: 10px 20px;
  background-color: #DB4444;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.5s ease;
}

.not-found__button:hover {
  background-color: #c03939;
  transform: translateY(-5px);
}
</style>