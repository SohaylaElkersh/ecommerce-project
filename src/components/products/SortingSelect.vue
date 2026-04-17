<template>
  <div class="sort-select">
    <p class="sort-select__label">Sort By:</p>
    <select class="sort-select__control" :value="value" @change="onChange">
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
        { value: "priceHighLow", label: "Price: High to Low" },
        { value: "discountLowHigh", label: "Discount: Low to High"},
        { value: "discountHighLow", label: "Discount: High to Low"},
        { value: "nameAZ", label: "A-Z"},
        { value: "nameZA", label: "Z-A"}
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
.sort-select {
  display: flex;
}

.sort-select__label {
  font-size: 24px;
  margin: auto 20px;
}

.sort-select__control {
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  min-width: 200px;
  cursor: pointer;
}

.sort-select__control:focus {
  outline: none;
  border-color: #888;
}
</style>