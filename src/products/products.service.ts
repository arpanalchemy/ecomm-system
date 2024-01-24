import { Injectable } from '@nestjs/common';
import { ProductQuery } from './entities/product.query';
import { CreateProductDto } from './dto/create-product.dto';
import { SearchDto } from 'src/users/dto/search.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(private readonly productQuery: ProductQuery) {}
  create(createProductDto: CreateProductDto) {
    return this.productQuery.upsert(createProductDto);
  }

  findAll(searchDto: SearchDto) {
    return this.productQuery.find(searchDto);
  }

  findOne(id: number) {
    return this.productQuery.findOne({ id: id });
  }

  update(id: number, updateProductDto: UpdateProductDto) {
    return this.productQuery.upsert({ id: id, ...updateProductDto });
  }

  remove(id: number) {
    return this.productQuery.remove(id);
  }
}
