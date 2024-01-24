import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CreateDateColumn, DeleteDateColumn, UpdateDateColumn } from 'typeorm';
@Entity({ name: 'userHasPaymentOptions' })
export class UserHasPaymentOption {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: false })
  userId: number;

  @Column({ nullable: false })
  cardNumber: string;

  @Column({ nullable: false })
  cardHolderName: string;

  @Column({ nullable: false })
  expiryDate: Date;

  @Column({ nullable: false })
  cvv: number;

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

  @ManyToOne(() => User, (user) => user.paymentOptions)
  @JoinColumn({ name: 'userId' })
  user: User;
}
