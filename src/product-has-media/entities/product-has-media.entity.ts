import { Media } from 'src/media/entities/media.entity';
import { Product } from 'src/products/entities/product.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { Entity, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity({ name: 'productHasMedia' })
export class ProductHasMedia {
  @PrimaryColumn()
  productId: number;

  @PrimaryColumn()
  tagId: number;

  @ManyToOne(() => Product, (product) => product.productHasMedia)
  product: Product;

  @ManyToOne(() => Media, (media) => media.productHasMedia)
  media: Media;
}
