export default {
  randomProducts: (state) => {
    const shuffled = [...state.products].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }
}