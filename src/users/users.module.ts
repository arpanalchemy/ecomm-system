import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { UserQuery } from './entities/user.query';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  // import:[TypeOrmModule.forFeature([user])]
  controllers: [UsersController],
  providers: [UsersService, UserQuery],
})
export class UsersModule {}
