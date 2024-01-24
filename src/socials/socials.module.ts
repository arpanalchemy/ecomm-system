import { Module } from '@nestjs/common';
import { SocialsService } from './socials.service';
import { SocialsController } from './socials.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Social } from './entities/social.entity';
import { SocialQuery } from './entities/social.query';

@Module({
  imports: [TypeOrmModule.forFeature([Social])],
  controllers: [SocialsController],
  providers: [SocialsService, SocialQuery],
})
export class SocialsModule {}
