import { Injectable, Search } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';
import { Like } from 'typeorm';
import { UserHasAddress } from './user-has-address.entity';
import { SearchDto } from 'src/users/dto/search.dto';

@Injectable()
export class UserHasAddressQuery {
  constructor(
    @InjectRepository(UserHasAddress)
    private readonly userHasAddressRepo: Repository<UserHasAddress>,
  ) {}

  public find(where: SearchDto, relations = []): Promise<UserHasAddress[]> {
    try {
      const search = Object.keys(where).reduce((acc, key) => {
        acc[key] = Like(`%${where[key]}%`);
        return acc;
      }, {});
      return this.userHasAddressRepo.find({
        where: search,
        relations: relations,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public findOne(where, relations = []): Promise<UserHasAddress> {
    try {
      return this.userHasAddressRepo.findOne({
        where: where,
        relations: relations,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public async upsert(body): Promise<UserHasAddress> {
    try {
      let object = null;
      if (body.id) {
        object = await this.findOne({ id: body.id });
      } else {
        object = new UserHasAddress();
      }
      object = Object.assign(object, body);
      return await this.userHasAddressRepo.save(object);
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }

  public async remove(id: number): Promise<UserHasAddress> {
    try {
      return await this.userHasAddressRepo.softRemove({ id });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
}
