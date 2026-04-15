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
      if (sortBy === 'priceLowHigh') return discountedPrice(a) - discountedPrice(b)
      if (sortBy === 'priceHighLow') return discountedPrice(b) - discountedPrice(a)
      if (sortBy === 'rating') return b.rating - a.rating
      return 0
    })
  }  
}