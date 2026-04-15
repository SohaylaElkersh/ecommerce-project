<template>
  <div class="custom-select">
    <p>Sort By:</p>
    <select :value="value" @change="onChange">
      <option v-for="option in sortOptions" :key="option.value" :value="option.value">
        {{ option.label }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'SortingSelect',
  props: {
    value: {
      type: String,
      default: 'nothing'
    }
  },
  data() {
    return {
      sortOptions: [
        { value: "nothing", label: "Default" },
        { value: "rating", label: "Highest Rating" },
        { value: "priceLowHigh", label: "Price: Low to High" },
        { value: "priceHighLow", label: "Price: High to Low" }
      ]
    }
  },
  methods: {
    onChange(event) {
      this.$emit('input', event.target.value)
    }
  }
}
</script>

<style scoped>
.custom-select {
    display: flex;
}

.custom-select p {
    font-size: 24px;
    margin: auto 20px;
}

.custom-select select {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 200px;
  cursor: pointer;
}

.custom-select select:focus {
  outline: none;
  border-color: #888;
}
</style>