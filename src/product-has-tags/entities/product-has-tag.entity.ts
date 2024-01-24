// src/product-has-tags/entities/product-has-tags.entity.ts
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { Product } from 'src/products/entities/product.entity';
import { Tag } from 'src/tags/entities/tag.entity';

@Entity({ name: 'productHasTags' })
export class ProductHasTags {
  @PrimaryColumn()
  productId: number;

  @PrimaryColumn()
  tagId: number;

  @ManyToOne(() => Product, (product) => product.productHasTags)
  product: Product;

  @ManyToOne(() => Tag, (tag) => tag.productHasTags)
  tag: Tag;
}
