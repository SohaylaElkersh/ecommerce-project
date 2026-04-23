<template>
  <router-link v-if="to" :to="to" class="base-btn base-btn--link">
    <slot />
  </router-link>

  <button v-else class="base-btn" :class="{ 'base-btn--disabled': disabled }" :type="type" :disabled="disabled" @click="$emit('click')">
    <slot />
  </button>
</template>

<script setup>

// to (String):
// If provided, component behaves as a router-link
defineProps ({
  to: String, 
  type: {
    type: String,
    default: "button"
  },
  disabled: Boolean
}) 
</script>

<style lang="scss">
@import "@/assets/styles/components/UI/BaseButton.scss"
</style>



// Purpose:
// Provides a reusable button component that can behave either as:
//   A standard HTML button
//   A router navigation link


 // type (String):
 // Button type attribute (default: "button")

 // disabled (Boolean):
 // Disables button interaction and applies disabled styling

 //Events:
 //  click:
 //    Emitted when button is clicked (only in button mode)

 //Behavior:
 // Automatically switches rendering mode based on presence of `to`
 // Applies conditional disabled styling