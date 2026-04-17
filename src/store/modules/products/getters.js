import { getDiscountedPriceFromProduct } from "@/utils/pricing";

export default {
  randomProducts: (state) => {
    const shuffled = [...state.products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  },

  sortedProducts: (state) => (sortBy) => {
    if (sortBy === 'nothing') return state.products

    return [...state.products].sort((a, b) => {
      const nameA = (a.title || "").toLowerCase();
      const nameB = (b.title || "").toLowerCase();

      if (sortBy === 'priceLowHigh') return getDiscountedPriceFromProduct(a) - getDiscountedPriceFromProduct(b)
      if (sortBy === 'priceHighLow') return getDiscountedPriceFromProduct(b) - getDiscountedPriceFromProduct(a)
      if (sortBy === 'discountLowHigh') return a.discountPercentage - b.discountPercentage
      if (sortBy === 'discountHighLow') return b.discountPercentage - a.discountPercentage
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'nameAZ') return nameA.localeCompare(nameB);
      if (sortBy === 'nameZA') return nameB.localeCompare(nameA);
      return 0
    })
  }  
}