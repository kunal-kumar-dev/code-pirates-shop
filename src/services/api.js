const BASE_URL = "https://fakestoreapi.com";

/**
 * API Service Object to centralize all network requests.
 */
export const api = {
  // Fetch all products from the server
  getAllProducts: async () => {
    try {
      const response = await fetch(`${BASE_URL}/products`);
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch products:", error);
      return [];
    }
  },

  // Fetch a single product details (Future use)
  getProductById: async (id) => {
    try {
      const response = await fetch(`${BASE_URL}/products/${id}`);
      return await response.json();
    } catch (error) {
      console.error("Failed to fetch product:", error);
      return null;
    }
  }
};