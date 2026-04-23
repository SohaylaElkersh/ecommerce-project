<template>
  <div class="product-details__wrapper">
    <BreadcrumbHeader class="product-details__breadcrumb" :current-label="product && product.title ? product.title : ''"/>
    <ProductInfo v-if="product" :product="product" />
    <div class="product-details__related" v-if="relatedProducts.length > 0">
      <div class="product-details__related-header">
        <HeaderColor>
          <template #small>More of this category</template>
        </HeaderColor>
      </div>
      <ProductGrid>
        <ProductCard v-for="prod in relatedProducts" :key="prod.id" :product="prod"/>
      </ProductGrid>
    </div>
  </div>
</template>

<script>
import BreadcrumbHeader from '@/components/navigation/BreadcrumbHeader.vue';
import ProductCard from '@/components/products/ProductCard.vue';
import HeaderColor from '@/components/UI/HeaderColor.vue';
import ProductInfo from '@/components/products/ProductInfo.vue';
import ProductGrid from '@/components/products/ProductGrid.vue';
import { useProductsStore } from '@/store/products.js';

export default {
  name: 'ProductDetails',
  components: {
    BreadcrumbHeader,
    ProductCard,
    HeaderColor,
    ProductInfo,
    ProductGrid
  },
  setup() {
    const productsStore = useProductsStore()
    return { productsStore }
  },    
  computed: {
    product() {
      return this.productsStore.product;
    },
    relatedProducts() {
      return this.productsStore.relatedProducts;
    },
  },
  methods: {
    fetchData(id) {
      return this.productsStore.fetchProduct(id)
        .then(product => {
          return this.productsStore.fetchRelatedProducts({
            category: product.category,
            productId: product.id
          });
        })
        .catch(() => {
          if (this.$route.name !== "NotFound") {
            this.$router.replace({ name: "NotFound" }).catch(() => {});
          }
        });
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.fetchData(to.params.id);
    });
  },
  beforeRouteUpdate(to, from, next) {
    this.fetchData(to.params.id)
      .then(() => next())
      .catch(() => next());
  }
}
</script>

<style lang="scss">
@import "@/assets/styles/pages/ProductDetails.scss";
</style>