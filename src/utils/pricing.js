export function getDiscountedPrice(price, discount) {
  return price * (1 - discount / 100);
}