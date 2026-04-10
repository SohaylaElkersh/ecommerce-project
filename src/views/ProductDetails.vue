<template>
    <div class="main">
          <ProductInfo/>
        <div class="similar-products" v-if="relatedProducts.length > 0">
          <div class="header">
            <HeaderColor>More of this category</HeaderColor> 
          </div>
            <div class="products-list">
                <ProductCard v-for="prod in relatedProducts" :key="prod.id" :product="prod" />
            </div>
        </div>
    </div>
</template>

<script>
import star from '../utils/rating.js';
import ProductCard from '../components/products/ProductCard.vue';
import HeaderColor from '../layout/shared/HeaderColor.vue';
import ProductInfo from '@/components/products/ProductInfo.vue';

export default {
    name: 'ProductDetails',
    components: {
       ProductCard,
       HeaderColor,
       ProductInfo
    },
    data() {
      return {
        quantity: 1
      }
    },
    computed: {
        product() {
          return this.$store.state.product
        },
        relatedProducts() {
          return this.$store.getters.relatedProducts;
        }
    },
  mounted() {
    const id = this.$route.params.id;
    this.$store.dispatch('fetchProduct', id)
      .catch(() => {
        this.$router.replace({ name: "NotFound" });
      });      
  },
  methods: {
      star,
      incrementQuantity() {
          this.quantity++;
      },
      decrementQuantity() {
          if (this.quantity > 1) {
              this.quantity--;
          }
      }
  },
  watch: {
   '$route.params.id'(newId) {
     this.$store.dispatch('fetchProduct', newId)
       .catch(() => {
         this.$router.replace({ name: "NotFound" });
       });
   }
 } 
}
</script>

<style scoped>
.main {
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.similar-products {
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: flex-start;
}

.products-list {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 40px;
}

.products-list ::v-deep .card {
  max-width: 280px;
  margin: 0;
}
</style>