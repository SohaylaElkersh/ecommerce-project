<template>
  <div class="product-card product-card--skeleton">
    <div class="product-card__image-wrapper">
      <div class="skeleton skeleton-image"></div>

      <div class="product-card__discount skeleton skeleton-badge"></div>

      <div class="product-card__actions">
        <div class="product-card__action skeleton skeleton-circle"></div>
        <div class="product-card__action skeleton skeleton-circle"></div>
      </div>

      <div class="product-card__cart skeleton skeleton-cart"></div>
    </div>

    <div class="product-card__info">
      <div class="product-card__title skeleton skeleton-text"></div>

      <div class="product-card__pricing">
        <div class="skeleton skeleton-text short"></div>
        <div class="skeleton skeleton-text short"></div>

        <div class="product-card__rating-skeleton">
          <div class="skeleton skeleton-text stars"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductCardSkeleton',    
}
</script>

<style lang="scss">
@import '@/assets/styles/components/products/ProductCardSkeleton.scss';
@import '@/assets/styles/components/products/ProductCard.scss';
</style>