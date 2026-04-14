<template>
    <div class="main">
        <div class="card">
            <div class="xmark" @click="removeFromCart"><i class="fa-solid fa-circle-xmark"></i></div>
            <img :src="product.thumbnail" :alt="product.title" />
            <p>{{ product.title }}</p>
            <div class="quantity">
                <div class="minus" @click="decrementQuantity"><i class="fa-solid fa-minus"></i></div>
                <div class="quantity-input"><span>{{ product.quantity }}</span></div>
                <div class="plus" @click="incrementQuantity"><i class="fa-solid fa-plus"></i></div>
            </div>
            <p>${{ product.price }}</p>
        </div>
    </div>
</template>

<script>
export default {
  name: "CartCard",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    incrementQuantity() {
      this.$store.commit('updateCartQuantity', 
      {productId: this.product.id, quantity: this.product.quantity + 1});
    },
    decrementQuantity() {
      if (this.product.quantity > 1) {
        this.$store.commit('updateCartQuantity', 
        {productId: this.product.id, quantity: this.product.quantity - 1});
      }
    },
    removeFromCart() {
      this.$store.commit('removeFromCart', this.product.id);
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

.card p {
    font-size: 14px;
}

.quantity {
  display: flex;
  align-items: center;
  gap: 0px;
}

.quantity .minus, .quantity .plus {
  width: 30px;
  height: 35px;
  background-color: #fff;
  color: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid #ccc;
  transition: all 0.5s ease;
}

.quantity .minus {
    border-top-left-radius: 4px;
    border-bottom-left-radius: 4px;
}

.quantity .plus {
    border-top-right-radius: 4px;
    border-bottom-right-radius: 4px;
}

.quantity .minus:hover, .quantity .plus:hover {
  background-color: #db4444;
  border: #db4444 solid 1px;
  color: #fff;
}

.quantity .quantity-input {
  width: 50px;
  height: 35px;
  text-align: center;
  border-top: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-left: none;
  border-right: none;
  font-weight: bold;
}

.quantity-input span {
  display: block;
  width: 100%;
  height: 100%;
  line-height: 35px;
  background-color: #fff
}
</style>

