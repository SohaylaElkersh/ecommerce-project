<!-- Every product returned from the dummy json has a discount percentage,
 so i just fetched a sliced array of products by fetchProducts action-->

<template>
    <div class="flash-sales">
        <div class="flash-sales__header">
            <HeaderColor>
              <span slot="small">Today's</span>
              <span slot="big">Flash Sales</span>
            </HeaderColor>
        </div>
        <ProductGrid>
          <ProductCard v-for="product in products" :key="product.id" :product="product"/>
        </ProductGrid>
        <BaseButton class="flash-sales__button" to="/explore">View All Products</BaseButton>
    </div>
</template>

<script>
import HeaderColor from '@/components/UI/HeaderColor.vue';
import ProductCard from '@/components/products/ProductCard.vue';
import ProductGrid from '@/components/products/ProductGrid.vue';
import BaseButton from '@/components/UI/BaseButton.vue';

export default {
    name: 'FlashSales',
    components: {
        HeaderColor,
        ProductCard,
        ProductGrid,
        BaseButton
    },
    computed: {
      products() {
        return this.$store.getters['products/randomProducts'];
      },
    }
}
</script>

<style scoped>
.flash-sales {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-bottom: solid #ccc 1px;
  padding-bottom: 40px;
}

.flash-sales__button {
  margin: 50px;
  align-self: center;
}
</style>