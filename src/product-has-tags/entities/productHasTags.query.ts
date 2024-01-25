import { Injectable, Search } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';
import { Like } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
import { SearchDto } from 'src/users/dto/search.dto';
import { ProductHasTags } from './product-has-tag.entity';

@Injectable()
export class ProductHasTagsQuery {
  constructor(
    @InjectRepository(ProductHasTags)
    private readonly productHasTagsRepo: Repository<ProductHasTags>,
  ) {}

  public find(where: SearchDto, relations = []): Promise<ProductHasTags[]> {
    try {
      const search = Object.keys(where).reduce((acc, key) => {
        acc[key] = Like(`%${where[key]}%`);
        return acc;
      }, {});
      return this.productHasTagsRepo.find({
        where: search,
        relations: relations,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public findOne(where, relations = []): Promise<ProductHasTags> {
    try {
      return this.productHasTagsRepo.findOne({
        where: where,
        relations: relations,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public async upsert(body): Promise<ProductHasTags> {
    try {
      let object = null;
      if (body.id) {
        object = await this.findOne({ id: body.id });
      } else {
        object = new Product();
      }
      object = Object.assign(object, body);
      return await this.productHasTagsRepo.save(object);
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }

  // public async remove(id: number): Promise<Product> {
  //   try {
  //     return await this.productHasTagsRepo.softRemove({ id});
  //   } catch (error) {
  //     console.log(error);
  //     if (error?.response?.statusCode !== 500) throw error;
  //     throw new InternalServerErrorException();
  //   }
  // }
}
