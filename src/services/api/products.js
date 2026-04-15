const BASE_URL = "https://dummyjson.com/products";

export const fetchProductsApi = ({ limit, skip }) => {
  return fetch(
    `${BASE_URL}?limit=${limit}&skip=${skip}&select=id,title,thumbnail,price,rating,reviews,discountPercentage`
  ).then(res => res.json());
};

export const fetchProductApi = (id) => {
  return fetch(
    `${BASE_URL}/${id}?select=id,thumbnail,images,title,price,rating,description,reviews,discountPercentage,category,stock,description`
  ).then(res => {
    if (!res.ok) throw new Error("Product not found");
    return res.json();
  });
};

export const fetchRelatedProductsApi = (category) => {
  return fetch(`${BASE_URL}/category/${category}`)
    .then(res => res.json());
};

export const fetchCategoriesApi = () => {
  return fetch(`${BASE_URL}/categories`)
    .then(res => res.json());
};