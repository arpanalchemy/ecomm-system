import { Module } from '@nestjs/common';
import { ProductHasTagsService } from './product-has-tags.service';
import { ProductHasTagsController } from './product-has-tags.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductHasTags } from './entities/product-has-tag.entity';
import { ProductHasTagsQuery} from './entities/productHasTags.query';

@Module({
  imports:[TypeOrmModule.forFeature([ProductHasTags])],
  controllers: [ProductHasTagsController],
  providers: [ProductHasTagsService,ProductHasTagsQuery],
})
export class ProductHasTagsModule {}
