import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './products.service';
import { ResponseData } from 'src/globals/globalClass';
import { HttpMessage, HttpStatus } from 'src/globals/globalEnum';
import { Product } from 'src/models/product.model';
import { ProductDto } from 'src/dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private productService: ProductService) {}

  @Get()
  getProducts(): ResponseData<Product[]> {
    try {
      return new ResponseData<Product[]>(
        this.productService.getProducts(),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product[]>(
        [],
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Get('/:id')
  getProductDetail(@Param('id') id: number): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.getProductDetail(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Post()
  createProduct(
    @Body(new ValidationPipe()) product: ProductDto,
  ): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.createProduct(product),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }

  @Put('/:id')
  updateProduct(
    @Param('id') id: number,
    @Body(new ValidationPipe()) product: ProductDto,
  ): ResponseData<Product> {
    try {
      return new ResponseData<Product>(
        this.productService.updateProduct(id, product),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<Product>({}, HttpStatus.ERROR, HttpMessage.ERROR);
    }
  }

  @Delete('/:id')
  deleteProduct(@Param('id') id: number): ResponseData<string> {
    try {
      return new ResponseData<string>(
        this.productService.deleteProduct(id),
        HttpStatus.SUCCESS,
        HttpMessage.SUCCESS,
      );
    } catch (error) {
      return new ResponseData<string>(
        null,
        HttpStatus.ERROR,
        HttpMessage.ERROR,
      );
    }
  }
}
