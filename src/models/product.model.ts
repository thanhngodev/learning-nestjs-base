export class Product {
  id?: number;
  categoryId?: number;
  productName?: string;
  price?: number;

  constructor(data?: Product) {
    if (data) {
      const { id, categoryId, productName, price } = data;
      this.id = id || null;
      this.categoryId = categoryId || null;
      this.productName = productName || null;
      this.price = price || null;
    }
  }
}
