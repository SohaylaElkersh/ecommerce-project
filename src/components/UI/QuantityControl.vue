<template>
  <div class="quantity">
    <div class="minus" @click="$emit('decrement')">
      <i class="fa-solid fa-minus"></i>
    </div>
    <div class="quantity-input">
      <span>{{ modelValue }}</span>
    </div>
    <div class="plus" @click="$emit('increment')">
      <i class="fa-solid fa-plus"></i>
    </div>
  </div>
</template>

<script>
export default {
  name: "QuantityControl",
  props: {
    modelValue: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
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