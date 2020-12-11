import {
  Controller,
  Body,
  Post,
  Get,
  Param,
  Delete,
  Patch,
} from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async addProduct(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('qty') qty: number,
    @Body('sentTime') sentTime: string,
    @Body('price') price: number,
    @Body('guarantee') guarantee: string,
    @Body('image') image: string,
    @Body('producer') producer: string,
    @Body('type') type: string,
    @Body('technology') technology: string,
    @Body('purpose') purpose: string,
    @Body('oar') oar: string,
    @Body('handle') handle: string,
    @Body('thickness') thickness: string,
    @Body('length') length: string,
    @Body('width') width: string,
  ) {
    console.log(
      '---------------------------------------------------------------------',
    );
    console.log('Adding product...', title, description, price);
    const generatedId = await this.productsService.insertProduct(
      title,
      description,
      qty,
      sentTime,
      price,
      guarantee,
      image,
      producer,
      type,
      technology,
      purpose,
      oar,
      handle,
      thickness,
      length,
      width,
    );
    return { id: generatedId };
  }

  @Get()
  async getAllProducts() {
    const products = await this.productsService.getProducts();
    return products;
  }

  @Get(':id')
  getProduct(@Param('id') prodId: string) {
    return this.productsService.getSingleProduct(prodId);
  }

  @Patch(':id')
  updateProduct(
    @Body('title') title: string,
    @Body('description') description: string,
    @Body('qty') qty: number,
    @Body('sentTime') sentTime: string,
    @Body('price') price: number,
    @Body('guarantee') guarantee: string,
    @Body('image') image: string,
    @Body('producer') producer: string,
    @Body('type') type: string,
    @Body('technology') technology: string,
    @Body('purpose') purpose: string,
    @Body('oar') oar: string,
    @Body('handle') handle: string,
    @Body('thickness') thickness: string,
    @Body('length') length: string,
    @Body('width') width: string,
  ) {
    this.productsService.updateProduct({
      title,
      description,
      qty,
      sentTime,
      price,
      guarantee,
      image,
      producer,
      type,
      technology,
      purpose,
      oar,
      handle,
      thickness,
      length,
      width,
    });
  }

  @Delete(':id')
  async removeProduct(@Param('id') prodId: string) {
    await this.productsService.deleteProduct(prodId);
    return null;
  }
}
