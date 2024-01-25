import { Injectable } from '@nestjs/common';
import { ProductHasTagsQuery } from './entities/productHasTags.query';
import { CreateProductHasTagDto } from './dto/create-product-has-tag.dto';
import { SearchDto } from 'src/users/dto/search.dto';
import { UpdateProductHasTagDto } from './dto/update-product-has-tag.dto';

@Injectable()
export class ProductHasTagsService {
  constructor(private readonly productHasTags: ProductHasTagsQuery) {}
  create(createProductHasTagDto: CreateProductHasTagDto) {
    return this.productHasTags.upsert(createProductHasTagDto);
  }

  findAll(searchDto: SearchDto) {
    return this.productHasTags.find(searchDto);
  }

  findOne(id: number) {
    return this.productHasTags.findOne({ id: id });
  }

  update(id: number, updateProductHasTagDto: UpdateProductHasTagDto) {
    return this.productHasTags.upsert({ id: id, ...updateProductHasTagDto });
  }

  // remove(id: number) {
  //   return this.productHasTags.remove(id);
  // }
}
