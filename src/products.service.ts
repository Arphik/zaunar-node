import { Injectable, NotFoundException } from '@nestjs/common';
import { Product } from './product.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  async insertProduct(
    title: string,
    description: string,
    qty: number,
    sentTime: string,
    price: number,
    guarantee: string,
    image: string,
    producer: string,
    type: string,
    technology: string,
    purpose: string,
    oar: string,
    handle: string,
    thickness: string,
    length: string,
    width: string,
  ) {
    const newProduct = new this.productModel({
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
    const prodResult = await newProduct.save();

    return prodResult.id;
  }

  async getProducts() {
    const products = await this.productModel.find().exec();

    return products.map((prod) => ({
      id: prod._id,
      title: prod.title,
      description: prod.description,
      qty: prod.qty,
      sentTime: prod.sentTime,
      price: prod.price,
      guarantee: prod.guarantee,
      image: prod.image,
      producer: prod.producer,
      type: prod.type,
      technology: prod.technology,
      purpose: prod.purpose,
      oar: prod.oar,
      handle: prod.handle,
      thickness: prod.thickness,
      length: prod.length,
      width: prod.width,
    }));
  }

  async getSingleProduct(productId: string) {
    const prod = await this.findProduct(productId);
    return {
      id: prod._id,
      title: prod.title,
      description: prod.description,
      qty: prod.qty,
      sentTime: prod.sentTime,
      price: prod.price,
      guarantee: prod.guarantee,
      image: prod.image,
      producer: prod.producer,
      type: prod.type,
      technology: prod.technology,
      purpose: prod.purpose,
      oar: prod.oar,
      handle: prod.handle,
      thickness: prod.thickness,
      length: prod.length,
      width: prod.width,
    };
  }

  private async findProduct(id: string): Promise<Product> {
    let product;
    try {
      product = await this.productModel.findById(id);
    } catch (error) {
      throw new NotFoundException('Could not find product.');
    }
    if (!product) {
      throw new NotFoundException('Could not find product.');
    }
    return product;
  }

  async updateProduct(newData) {
    const updatedProduct: Product = await this.findProduct(newData.id);

    for (const prop in newData) {
      updatedProduct[prop] = newData[prop];
    }
    console.log("EDIT");
    // updatedProduct.save();
  }

  async deleteProduct(prodId: string) {
    console.log('Backend Service Delete', prodId);
    await this.productModel.deleteOne({ _id: prodId }).exec();
  }
}
