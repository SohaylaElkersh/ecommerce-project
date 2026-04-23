import { api } from "./axios";

// 1. fetchProductsApi({ limit, skip })
//    - Fetches a paginated list of products
//    - Uses query params:
//      - limit: number of products per request
//      - skip: pagination offset
//      - select: reduces response fields for performance
export const fetchProductsApi = async ({ limit, skip }) => {
  const res = await api.get("", {
    params: { limit, skip, select: "id,title,thumbnail,price,rating,reviews,discountPercentage", },
  });
  return res.data;
};

// 2. fetchProductApi(id)
//    - Fetches a single product by ID
//    - Selects detailed product fields:
//      - images, description, stock, category, rating, etc.
//    - Error Handling:
//      - Throws "Product not found" if request fails
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

// 3. fetchRelatedProductsApi(category)
//    - Fetches products from the same category
//    - Used for "related products" sections
export const fetchRelatedProductsApi = async (category) => {
  const res = await api.get(`/category/${category}`);
  return res.data;
};

// 4. fetchCategoriesApi()
//    - Retrieves all product categories
export const fetchCategoriesApi = async () => {
  const res = await api.get("/categories");
  return res.data;
};

// 5. fetchProductsByCategoryApi({ category, limit, skip })
//    - Fetches products filtered by category
//    - Supports pagination via limit and skip
//    - Selects optimized product fields for listing views
export const fetchProductsByCategoryApi = async ({ category, limit, skip, }) => {
  const res = await api.get(`/category/${category}`, {
    params: { limit, skip, select: "id,title,thumbnail,price,rating,reviews,discountPercentage", },
  });
  return res.data;
};



// Purpose:
// Provides a centralized layer for all product-related API requests.
// Uses a pre-configured Axios instance to communicate with the backend.