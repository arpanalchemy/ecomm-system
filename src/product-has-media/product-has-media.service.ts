import { Injectable } from '@nestjs/common';
import { ProductHasMediaQuery } from './entities/productHasMedia.query';
import { UpdateProductHasMediaDto } from './dto/update-product-has-media.dto';
import { SearchDto } from 'src/users/dto/search.dto';
import { CreateProductHasMediaDto } from './dto/create-product-has-media.dto';

@Injectable()
export class ProductHasMediaService {
  constructor(private readonly productHasMedia: ProductHasMediaQuery) {}
  create(createProductHasMediaDto: CreateProductHasMediaDto) {
    return this.productHasMedia.upsert(createProductHasMediaDto);
  }

  findAll(searchDto: SearchDto) {
    return this.productHasMedia.find(searchDto);
  }

  findOne(id: number) {
    return this.productHasMedia.findOne({ id: id });
  }

  update(id: number, updateProductHasMediaDto: UpdateProductHasMediaDto) {
    return this.productHasMedia.upsert({ id: id, ...updateProductHasMediaDto });
  }

  // remove(id: number) {
  //   return this.productHasMedia.remove(id);
  // }
}
