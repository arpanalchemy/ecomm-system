import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { InternalServerErrorException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Like } from 'typeorm';
import { Color } from './color.entity';
import { SearchDto } from 'src/users/dto/search.dto';

@Injectable()
export class ColorQuery {
  constructor(
    @InjectRepository(Color)
    private readonly colorRepository: Repository<Color>,
  ) {}
  public find(where: SearchDto, relations = []): Promise<Color[]> {
    try {
      const search = Object.keys(where).reduce((acc, key) => {
        acc[key] = Like(`%${where[key]}%`);
        return acc;
      }, {});
      return this.colorRepository.find({
        where: search,
        relations: relations,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public findOne(where, relations = []): Promise<Color[]> {
    try {
      return this.colorRepository.find({
        where: where,
        relations: relations,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public async remove(id: number): Promise<Color> {
    try {
      return await this.colorRepository.softRemove({ id });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public async upsert(body): Promise<Color> {
    try {
      console.log('Body>>>>>>>>>>>>>>>>>>>>>>>', body);
      let object = null;
      if (body.id) {
        object = await this.findOne({ id: body.id });
      } else {
        object = new Color();
      }
      object = Object.assign(object, body);
      console.log(object);
      return await this.colorRepository.save(object);
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
}
