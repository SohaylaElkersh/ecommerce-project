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

<script>
export default {
  name: "BaseInput",
  props: {
    modelValue: String,
    type: {
      type: String,
      default: "text"
    },
    placeholder: String,
    disabled: Boolean
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/components/UI/BaseInput.scss"
</style>