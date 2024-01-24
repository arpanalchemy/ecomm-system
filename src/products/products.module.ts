import { Module } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductQuery } from './entities/product.query';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { TagQuery } from 'src/tags/entities/tag.query';
import { ProductHasTagsQuery } from 'src/product-has-tags/entities/productHasTags.query';

@Module({
  imports: [TypeOrmModule.forFeature([Product,Tag])],
  controllers: [ProductsController],
  providers: [ProductService, ProductQuery,TagQuery],
})
export class ProductsModule {}
