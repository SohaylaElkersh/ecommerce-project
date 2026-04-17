function toNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

export function getDiscountedPrice(price, discount) {
  const basePrice = toNumber(price);
  const discountRate = toNumber(discount) / 100;
  return basePrice * (1 - discountRate);
}

export function getDiscountedPriceFromProduct(product) {
  return getDiscountedPrice(product?.price, product?.discountPercentage);
}

export function getDiscountPercentage(product) {
  return Math.ceil(toNumber(product?.discountPercentage));
}