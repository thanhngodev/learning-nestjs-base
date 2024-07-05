import { IsNotEmpty, IsNumber, MinLength } from 'class-validator';

export class ProductDto {
  @IsNotEmpty()
  categoryId?: number;

  @MinLength(5, { message: 'Tên product lớn hơn 5 ký tự!!!' })
  productName?: string;

  @IsNumber()
  price?: number;
}
