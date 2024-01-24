import { Category } from 'src/category/entities/category.entity';
import { Color } from 'src/colors/entities/color.entity';
import { Media } from 'src/media/entities/media.entity';
import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
import { ProductHasTags } from 'src/product-has-tags/entities/product-has-tag.entity';
import { Social } from 'src/socials/entities/social.entity';
import { Tag } from 'src/tags/entities/tag.entity';
import { User } from 'src/users/entities/user.entity';
import { Variant } from 'src/variants/entities/variant.entity';
import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  PrimaryGeneratedColumn,
  OneToMany,
  OneToOne,
  ManyToOne,
  JoinColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'products' })
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  createdBy: number;

  @Column({ nullable: false })
  categoryId: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  weight: number;

  @Column({ nullable: false })
  collection: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  quantity: number;

  @Column({ nullable: false, type: 'float' })
  price: number;

  @Column({ nullable: false })
  size: number;

  @Column({ type: 'text', nullable: true, array: true })
  tags: string[];

  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    nullable: false,
  })
  createdAt: Date;

  @UpdateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
    onUpdate: 'CURRENT_TIMESTAMP(6)',
    nullable: false,
  })
  updatedAt: Date;

  @DeleteDateColumn({ type: 'timestamp', nullable: true })
  deletedAt: Date;

  @OneToOne(() => OrderDetail, (orderDetail) => orderDetail.product)
  orderDetail: OrderDetail;

  @OneToMany(() => Social, (social) => social.product)
  socials: Social[];

  @OneToMany(() => Variant, (variant) => variant.product)
  variants: Variant;

  @ManyToOne(() => Category, (category) => category.products)
  @JoinColumn({ name: 'categoryId' })
  category: Category;

  @ManyToOne(() => User, (user) => user.products)
  @JoinColumn({ name: 'createdBy' })
  user: User;

  @ManyToMany(() => Tag, (tag) => tag.products)
  @JoinTable({
    name: 'productHasTags',
    joinColumn: { name: 'productId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'tagId', referencedColumnName: 'id' },
  })
  tagss: Tag[];

  @ManyToMany(() => Color, (color) => color.products)
  @JoinTable({
    name: 'productsHasColors',
    joinColumn: { name: 'productId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'colorId', referencedColumnName: 'id' },
  })
  colors: Color[];

  @ManyToMany(() => Media, (media) => media.products)
  @JoinTable({
    name: 'productsHasMedia',
    joinColumn: { name: 'productId', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'mediaId', referencedColumnName: 'id' },
  })
  media: Media[];

  @OneToMany(() => ProductHasTags, (productHasTags) => productHasTags.product)
  productHasTags: ProductHasTags[];
}
