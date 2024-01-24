import { OrderDetail } from 'src/order-details/entities/order-detail.entity';
import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/products/entities/product.entity';
import { UserHasAddress } from 'src/user-has-address/entities/user-has-address.entity';
import { UserHasPaymentOption } from 'src/user-has-payment-options/entities/user-has-payment-option.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
@Entity({ name: 'users' })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  name: string;

  @Column({ nullable: false })
  email: string;

  @Column({ nullable: false })
  dateOfBirth: Date;

  @Column({ nullable: false })
  mobileNo: string;

  @Column({ nullable: false })
  password: string;

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

  @OneToMany(() => UserHasAddress, (userHasAddress) => userHasAddress.user)
  addresses: UserHasAddress[];

  @OneToMany(
    () => UserHasPaymentOption,
    (userHasPaymentOption) => userHasPaymentOption.user,
  )
  paymentOptions: UserHasPaymentOption[];

  @OneToMany(() => Order, (order) => order.user)
  orders: Order[];

  @OneToMany(() => Product, (product) => product.user)
  products: Product[];
}
