import { Module } from '@nestjs/common';
import { ProductHasMediaService } from './product-has-media.service';
import { ProductHasMediaController } from './product-has-media.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductHasMedia } from './entities/product-has-media.entity';
import { ProductHasMediaQuery } from './entities/productHasMedia.query';

@Module({
  imports: [TypeOrmModule.forFeature([ProductHasMedia])],
  controllers: [ProductHasMediaController],
  providers: [ProductHasMediaService, ProductHasMediaQuery],
})
export class ProductHasMediaModule {}
