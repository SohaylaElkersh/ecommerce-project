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

<style lang="scss">
@import "@/assets/styles/components/UI/QuantityControl.scss"
</style>