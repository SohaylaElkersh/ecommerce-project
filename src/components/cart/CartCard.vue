<template>
    <div class="main">
        <div class="card">
            <div class="xmark" @click="removeFromCart"><i class="fa-solid fa-circle-xmark"></i></div>
            <img :src="product.thumbnail" :alt="product.title" />
            <p class="title">{{ product.title }}</p>
            <QuantityControl :modelValue="product.quantity" @increment="incrementQuantity" @decrement="decrementQuantity"/>
            <p>${{ product.price }}</p>
        </div>
    </div>
</template>

<script>
import QuantityControl from '../UI/QuantityControl.vue';

export default {
  name: "CartCard",
  components: {
    QuantityControl
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    incrementQuantity() {
      this.$store.dispatch('cart/updateCartQuantity', 
      {productId: this.product.id, quantity: this.product.quantity + 1});
    },
    decrementQuantity() {
      if (this.product.quantity > 1) {
        this.$store.dispatch('cart/updateCartQuantity', 
        {productId: this.product.id, quantity: this.product.quantity - 1});
      }
    },
    removeFromCart() {
      this.$store.dispatch('cart/removeFromCart', this.product.id);
    }
  }
}
</script>

<style scoped>
.main {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    max-width: 550px;
    width: 100%;
    margin: 5px auto 5px;
    box-sizing: border-box;
}

.card {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    padding: 15px 0px;
    border-radius: 4px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    transition: all 0.5s ease;
    cursor: pointer;
    width: 500px;
    max-width: 100%;
    box-sizing: border-box;
}

.card:hover {
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(-10px);
  background-color: #f5f5f5;
}

.card .xmark,
.card img,
.quantity,
.card p:last-child {
  flex-shrink: 0;
}

.card .xmark {
    color: #db4444;
    font-size: 20px;
    transition: all 0.5s ease;
    cursor: pointer;
}

.card:hover .xmark:hover {
    transform: scale(1.1);
    color: #c03939;
}

.card img {
    width: 70px;
    height: auto;
    aspect-ratio: 1 / 1;
}

.title {
  flex: 0.8;                 
  min-width: 0;           
  white-space: nowrap;     
  overflow: hidden;        
  text-overflow: ellipsis; 
  font-size: 14px;
}
</style>