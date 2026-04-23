<template>
  <input
    class="base-input"
    :class="{ 'base-input--disabled': disabled }"
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  />
</template>

<script setup>

// - modelValue (String):
//   Bound value for v-model two-way data binding
//
// - type (String):
//   Input type attribute (default: "text")
//
// - placeholder (String):
//   Placeholder text displayed inside the input
//
// - disabled (Boolean):
//   Disables user interaction and applies disabled styling
defineProps({
  modelValue: String,
  type: {
    type: String,
    default: "text"
  },
  placeholder: String,
  disabled: Boolean
})
</script>

<style lang="scss">
@import "@/assets/styles/components/UI/BaseInput.scss"
</style>



// Component Purpose:
// Provides a reusable and standardized input field component
// for forms across the application.


// Behavior:
//   Fully controlled input using v-model pattern
//   Emits updated value on every input event
//   Applies disabled styling when disabled prop is true