import { Injectable } from '@nestjs/common';
import { UserHasPaymnetOptionsQuery } from './entities/userHasPaymentOptions.query';
import { CreateUserHasPaymentOptionDto } from './dto/create-user-has-payment-option.dto';
import { SearchDto } from 'src/users/dto/search.dto';
import { UpdateUserHasPaymentOptionDto } from './dto/update-user-has-payment-option.dto';

@Injectable()
export class UserHasPaymentOptionsService {
  constructor(
    private readonly UserHasPaymentOptionsQuery: UserHasPaymnetOptionsQuery,
  ) {}
  create(createUserHasPaymentOptionDto: CreateUserHasPaymentOptionDto) {
    return this.UserHasPaymentOptionsQuery.upsert(
      createUserHasPaymentOptionDto,
    );
  }

  findAll(searchDto: SearchDto) {
    return this.UserHasPaymentOptionsQuery.find(searchDto);
  }

  findOne(id: number) {
    return this.UserHasPaymentOptionsQuery.findOne({ id: id });
  }

  update(
    id: number,
    updateUserHasPaymentOptionDto: UpdateUserHasPaymentOptionDto,
  ) {
    return this.UserHasPaymentOptionsQuery.upsert({
      id: id,
      ...updateUserHasPaymentOptionDto,
    });
  }

  remove(id: number) {
    return this.UserHasPaymentOptionsQuery.remove(id);
  }
}
