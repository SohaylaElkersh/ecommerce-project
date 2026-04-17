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

<style scoped>
.base-btn {
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #db4444;
  color: #fff;
  border-radius: 4px;
  border: none;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.5s ease;
}

.base-btn:hover {
  background-color: #c03939;
  transform: translateY(-5px);
}

.base-btn--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  transform: none;
}

.base-btn--link {
  display: inline-block;
}
</style>