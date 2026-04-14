<template>
  <input
    class="base-input"
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
    placeholder: String
  }
};
</script>

<style scoped>
.base-input {
  width: 100%;
  padding: 10px;
  background-color: #f5f5f5;
  border-radius: 4px;
  border: none;
  box-sizing: border-box;
}

.base-input:focus {
    border: 1px solid #ccc;
    outline: none;
}
</style>