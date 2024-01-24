import { Module } from '@nestjs/common';
import { UserHasPaymentOptionsService } from './user-has-payment-options.service';
import { UserHasPaymentOptionsController } from './user-has-payment-options.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserHasPaymnetOptionsQuery } from './entities/userHasPaymentOptions.query';
import { UserHasPaymentOption } from './entities/user-has-payment-option.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserHasPaymentOption])],
  controllers: [UserHasPaymentOptionsController],
  providers: [UserHasPaymentOptionsService, UserHasPaymnetOptionsQuery],
})
export class UserHasPaymentOptionsModule {}
