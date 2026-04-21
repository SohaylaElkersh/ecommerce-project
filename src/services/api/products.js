import { api } from "./axios";

export const fetchProductsApi = async ({ limit, skip }) => {
  const res = await api.get("", {
    params: { limit, skip, select: "id,title,thumbnail,price,rating,reviews,discountPercentage", },
  });
  return res.data;
};

export const fetchProductApi = async (id) => {
  try {
    const res = await api.get(`/${id}`, {
      params: { select: "id,thumbnail,images,title,price,rating,description,reviews,discountPercentage,category,stock,description", },
    });
    return res.data;
  } catch (err) {
    throw new Error("Product not found");
  }
};

export const fetchRelatedProductsApi = async (category) => {
  const res = await api.get(`/category/${category}`);
  return res.data;
};

export const fetchCategoriesApi = async () => {
  const res = await api.get("/categories");
  return res.data;
};

export const fetchProductsByCategoryApi = async ({ category, limit, skip, }) => {
  const res = await api.get(`/category/${category}`, {
    params: { limit, skip, select: "id,title,thumbnail,price,rating,reviews,discountPercentage", },
  });
  return res.data;
};