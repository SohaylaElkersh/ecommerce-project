<template>
  <div class="product-grid">
    <slot />
  </div>
</template>

<script>
export default {
  name: "ProductGrid",
};
</script>

<style lang="scss">
@import "@/assets/styles/components/products/ProductGrid.scss";
</style>