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

<style lang="scss">
@import "@/assets/styles/components/products/SortingSelect.scss";
</style>