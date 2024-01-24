import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Like } from 'typeorm';

import { SearchDto } from 'src/users/dto/search.dto';
import { Category } from './category.entity';

@Injectable()
export class CategoryQuery {
  constructor(
    @InjectRepository(Category)
    private readonly categoryRepository: Repository<Category>,
  ) {}
  public find(where: SearchDto, relations = []): Promise<Category[]> {
    try {
      const search = Object.keys(where).reduce((acc, key) => {
        acc[key] = Like(`%${where[key]}%`);
        return acc;
      }, {});
      return this.categoryRepository.find({
        where: search,
        relations: relations,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public findOne(where, relations = []): Promise<Category[]> {
    try {
      return this.categoryRepository.find({
        where: where,
        relations: relations,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public async remove(id: number): Promise<Category> {
    try {
      return await this.categoryRepository.softRemove({ id });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public async upsert(body): Promise<Category> {
    try {
      console.log('Body>>>>>>>>>>>>>>>>>>>>>>>', body);
      let object = null;
      if (body.id) {
        object = await this.findOne({ id: body.id });
      } else {
        object = new Category();
      }
      object = Object.assign(object, body);
      return await this.categoryRepository.save(object);
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
}
