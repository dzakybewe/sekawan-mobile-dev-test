const baseUrl = "https://dummyjson.com/";

export async function getAllProducts() {
  try {
    const response = await fetch(`${baseUrl}products`);
    const result = await response.json();
    return result.products;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getDetailProduct(productId) {
  try {
    const response = await fetch(`${baseUrl}products/${productId}`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getProductsByCategory(category, limit) {
  try {
    const response = await fetch(
      `${baseUrl}products/category/${category}?limit=${limit}`
    );
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getAllCategories() {
  try {
    const response = await fetch(`${baseUrl}products/category-list`);
    const result = await response.json();
    return result;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
