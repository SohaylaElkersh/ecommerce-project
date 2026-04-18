<template>
  <router-link v-if="to" :to="to" class="base-btn base-btn--link">
    <slot />
  </router-link>

  <button v-else class="base-btn" :class="{ 'base-btn--disabled': disabled }" :type="type" :disabled="disabled" @click="$emit('click')">
    <slot />
  </button>
</template>

<script>
export default {
  name: "BaseButton",
  props: {
    to: String, 
    type: {
      type: String,
      default: "button"
    },
    disabled: Boolean
  }
};
</script>

<style lang="scss">
@import "@/assets/styles/components/UI/BaseButton.scss"
</style>