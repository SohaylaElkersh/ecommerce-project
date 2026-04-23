// Safely converts a value to a number
// Returns fallback if value is not a valid finite number
function toNumber(value, fallback = 0) {
  const parsed = Number(value);
  return Number.isFinite(parsed) ? parsed : fallback;
}

// Calculates final price after applying discount percentage
// Formula: price * (1 - discount / 100)
// Ensures inputs are safely converted to numbers
export function getDiscountedPrice(price, discount) {
  const basePrice = toNumber(price);
  const discountRate = toNumber(discount) / 100;
  return basePrice * (1 - discountRate);
}

// Wrapper function for product objects
// Extracts price and discountPercentage from product
// Returns final discounted price
export function getDiscountedPriceFromProduct(product) {
  return getDiscountedPrice(product?.price, product?.discountPercentage);
}

// Returns rounded-up discount percentage from product
// Ensures safe numeric conversion
export function getDiscountPercentage(product) {
  return Math.ceil(toNumber(product?.discountPercentage));
}



// Purpose:
// Provides helper functions for safe numeric conversion and
// product pricing calculations such as discounts and final price.