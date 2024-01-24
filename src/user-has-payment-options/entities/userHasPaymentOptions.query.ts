import { Injectable, Search } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';
import { Like } from 'typeorm';
import { UserHasPaymentOption } from './user-has-payment-option.entity';
import { SearchDto } from 'src/users/dto/search.dto';

@Injectable()
export class UserHasPaymnetOptionsQuery {
  constructor(
    @InjectRepository(UserHasPaymentOption)
    private readonly UserHasPaymentOptionsRepo: Repository<UserHasPaymentOption>,
  ) {}

  public find(
    where: SearchDto,
    relations = [],
  ): Promise<UserHasPaymentOption[]> {
    try {
      const search = Object.keys(where).reduce((acc, key) => {
        acc[key] = Like(`%${where[key]}%`);
        return acc;
      }, {});
      return this.UserHasPaymentOptionsRepo.find({
        where: search,
        relations: relations,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public findOne(where, relations = []): Promise<UserHasPaymentOption> {
    try {
      return this.UserHasPaymentOptionsRepo.findOne({
        where: where,
        relations: relations,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public async upsert(body): Promise<UserHasPaymentOption> {
    try {
      let object = null;
      if (body.id) {
        object = await this.findOne({ id: body.id });
      } else {
        object = new UserHasPaymentOption();
      }
      object = Object.assign(object, body);
      return await this.UserHasPaymentOptionsRepo.save(object);
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }

  public async remove(id: number): Promise<UserHasPaymentOption> {
    try {
      return await this.UserHasPaymentOptionsRepo.softRemove({ id });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
}
