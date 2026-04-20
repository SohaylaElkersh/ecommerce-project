<template>
  <div class="product-details__wrapper">
    <BreadcrumbHeader class="product-details__breadcrumb" :current-label="product && product.title ? product.title : ''"/>
    <ProductInfo :product="product" />
    <div class="product-details__related" v-if="relatedProducts.length > 0">
      <div class="product-details__related-header">
        <HeaderColor>
          <span slot="small">More of this category</span>
        </HeaderColor>
      </div>
      <ProductGrid>
        <template v-if="loading">
          <ProductCardSkeleton v-for="n in 4" :key="n" />
        </template>
        <template>
          <ProductCard v-for="prod in relatedProducts" :key="prod.id" :product="prod"/>
        </template>
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
import ProductCardSkeleton from '@/components/products/ProductCardSkeleton.vue';

export default {
  name: 'ProductDetails',
  components: {
    ProductCardSkeleton,
    BreadcrumbHeader,
    ProductCard,
    HeaderColor,
    ProductInfo,
    ProductGrid
  },
  computed: {
    product() {
      return this.$store.state.products.product;
    },
    relatedProducts() {
      return this.$store.state.products.relatedProducts;
    }
  },
  methods: {
    fetchData(id) {
      return this.$store.dispatch('products/fetchProduct', id)
        .then(product => {
          return this.$store.dispatch('products/fetchRelatedProducts', {
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