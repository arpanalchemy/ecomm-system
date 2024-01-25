import { Module } from '@nestjs/common';
import { ProductService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductQuery } from './entities/product.query';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { TagQuery } from 'src/tags/entities/tag.query';
import { ProductHasTagsQuery } from 'src/product-has-tags/entities/productHasTags.query';
import { ProductHasTags } from 'src/product-has-tags/entities/product-has-tag.entity';
import { MediaQuery } from 'src/media/entities/media.query';
import { Media } from 'src/media/entities/media.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Product, Tag, ProductHasTags, Media])],
  controllers: [ProductsController],
  providers: [
    ProductService,
    ProductQuery,
    TagQuery,
    ProductHasTagsQuery,
    MediaQuery,
  ],
})
export class ProductsModule {}
