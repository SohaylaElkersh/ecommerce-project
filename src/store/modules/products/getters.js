export default {
  randomProducts: (state) => {
    const shuffled = [...state.products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  },

  sortedProducts: (state) => (sortBy) => {
    if (sortBy === 'nothing') return state.products
    
    const discountedPrice = (product) => {
      return product.price * (1 - product.discountPercentage / 100)
    }

    return [...state.products].sort((a, b) => {
      const nameA = (a.title || "").toLowerCase();
      const nameB = (b.title || "").toLowerCase();

      if (sortBy === 'priceLowHigh') return discountedPrice(a) - discountedPrice(b)
      if (sortBy === 'priceHighLow') return discountedPrice(b) - discountedPrice(a)
      if (sortBy === 'discountLowHigh') return a.discountPercentage - b.discountPercentage
      if (sortBy === 'discountHighLow') return b.discountPercentage - a.discountPercentage
      if (sortBy === 'rating') return b.rating - a.rating
      if (sortBy === 'nameAZ') return nameA.localeCompare(nameB);
      if (sortBy === 'nameZA') return nameB.localeCompare(nameA);
      return 0
    })
  }  
}