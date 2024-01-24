import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import { UserHasAddress } from 'src/user-has-address/entities/user-has-address.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'orderDetails' })
export class OrderDetail {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  orderId: number;

  @Column({ nullable: false })
  productId: number;

  @Column({ nullable: false })
  addressId: number;

  @Column({ nullable: false })
  receivedAt: Date;

  @Column({ nullable: false })
  transmittedAt: Date;

  @Column({ nullable: false })
  orderPrice: number;

  @Column({ nullable: false })
  deliveryCharges: number;

  @Column({ nullable: false })
  taxes: number;

  @Column({ nullable: false })
  total: number;

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

  @ManyToOne(() => Order, (order) => order.orderDetails)
  @JoinColumn({ name: 'orderId' })
  order: Order;

  @OneToOne(() => Product, (product) => product.orderDetail)
  @JoinColumn({ name: 'productId' })
  product: Product;

  // @OneToMany(
  //   () => UserHasAddress,
  //   (userHasAddress) => userHasAddress.orderDetail,
  // )
  // @JoinColumn({ name: 'addressId' })
  // address: UserHasAddress;
}
