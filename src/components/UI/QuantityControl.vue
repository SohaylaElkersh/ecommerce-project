<template>
  <div class="quantity">
    <div class="quantity__button quantity__button--minus" @click="$emit('decrement')">
      <i class="fa-solid fa-minus"></i>
    </div>

    <div class="quantity__value">
      <span class="quantity__value-text">{{ modelValue }}</span>
    </div>

    <div class="quantity__button quantity__button--plus" @click="$emit('increment')">
      <i class="fa-solid fa-plus"></i>
    </div>
  </div>
</template>

<script setup>

// Current quantity value displayed in the component
defineProps ({
  modelValue: {
    type: Number,
    required: true
  }
})
</script>

<style lang="scss">
@import "@/assets/styles/components/UI/QuantityControl.scss"
</style>



// Component Purpose:
// Provides a simple UI control for increasing or decreasing a numeric value,
// typically used for product quantity selection in cart or product pages.

// Events:
//  increment:
//   Triggered when user clicks "+" button
//  decrement:
//   Triggered when user clicks "-" button


// Behavior:
//   Does not manage internal state
//   Fully controlled by parent component via props/events