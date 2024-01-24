import { Module } from '@nestjs/common';
import { UserHasAddressService } from './user-has-address.service';
import { UserHasAddressController } from './user-has-address.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserHasAddress } from './entities/user-has-address.entity';
import { UserHasAddressQuery } from './entities/userHasAddress.query';

@Module({
  imports: [TypeOrmModule.forFeature([UserHasAddress])],
  controllers: [UserHasAddressController],
  providers: [UserHasAddressService, UserHasAddressQuery],
})
export class UserHasAddressModule {}
