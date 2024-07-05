import { Injectable } from '@nestjs/common';
import { PRODUCT_DATA } from 'src/constants/product';
import { ProductDto } from 'src/dto/product.dto';
import { Product } from 'src/models/product.model';

@Injectable()
export class ProductService {
  private products: Product[] = PRODUCT_DATA;

  getProducts(): Product[] {
    return this.products;
  }

  getProductDetail(id: number): Product {
    return this.products.find((item: Product) => item.id === Number(id)) || {};
  }

  createProduct(product: ProductDto): Product {
    const productNew: Product = {
      id: Math.floor(Math.random() * (2000 - 40 + 1) + 40),
      ...product,
    };
    this.products.push(productNew);
    return productNew;
  }

  updateProduct(id: number, product: ProductDto): Product {
    const idx = this.products.findIndex((product) => product.id === Number(id));
    this.products[idx].categoryId = product.categoryId;
    this.products[idx].productName = product.productName;
    this.products[idx].price = product.price;
    return this.products[idx];
  }

  deleteProduct(id: number): string {
    const idx = this.products.findIndex((product) => product.id === Number(id));
    if(idx !== -1) {
        this.products.splice(idx, 1);
        return 'Product deleted';
    }

    return "Product not found"
  }
}
