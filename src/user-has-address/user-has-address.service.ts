import { Injectable } from '@nestjs/common';
import { CreateUserHasAddressDto } from './dto/create-user-has-address.dto';
import { SearchDto } from 'src/users/dto/search.dto';
import { UpdateUserHasAddressDto } from './dto/update-user-has-address.dto';
import { UserHasAddressQuery } from './entities/userHasAddress.query';

@Injectable()
export class UserHasAddressService {
  constructor(private readonly UserHasAddressQuery: UserHasAddressQuery) {}
  create(createUserHasAddressDto: CreateUserHasAddressDto) {
    return this.UserHasAddressQuery.upsert(createUserHasAddressDto);
  }

  findAll(searchDto: SearchDto) {
    return this.UserHasAddressQuery.find(searchDto);
  }

  findOne(id: number) {
    return this.UserHasAddressQuery.findOne({ id: id });
  }

  update(id: number, updateUserHasAddressDto: UpdateUserHasAddressDto) {
    return this.UserHasAddressQuery.upsert({
      id: id,
      ...updateUserHasAddressDto,
    });
  }

  remove(id: number) {
    return this.UserHasAddressQuery.remove(id);
  }
}
