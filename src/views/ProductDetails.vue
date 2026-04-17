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
        <ProductCard v-for="prod in relatedProducts" :key="prod.id" :product="prod"/>
      </ProductGrid>
    </div>
  </div>
</template>

<script>
import BreadcrumbHeader from '@/components/layout/shared/BreadcrumbHeader.vue';
import ProductCard from '@/components/products/ProductCard.vue';
import HeaderColor from '@/components/UI/HeaderColor.vue';
import ProductInfo from '@/components/products/ProductInfo.vue';
import ProductGrid from '@/components/products/ProductGrid.vue';

export default {
  name: 'ProductDetails',
  components: {
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
  mounted() {
    this.fetchData(this.$route.params.id);
  },
  watch: {
    '$route.params.id'(newId) {
      this.fetchData(newId);
    }
  }
}
</script>

<style scoped>
.product-details__wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.product-details__breadcrumb {
  align-self: flex-start;
  margin: 20px 125px;
}

.product-details__related {
  margin-top: 0;
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
}

.product-details__related-header {
  display: flex;
  align-items: flex-start;
}
</style>