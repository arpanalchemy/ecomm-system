import { Injectable } from '@nestjs/common';
import { SearchDto } from 'src/users/dto/search.dto';
import { OrderDetailsQuery } from './entities/orderDetails.query';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';

@Injectable()
export class OrderDetailsService {
  constructor(private readonly orderDetailsQuery: OrderDetailsQuery) {}
  create(CreateOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailsQuery.upsert(CreateOrderDetailDto);
  }

  findAll(searchDto: SearchDto) {
    return this.orderDetailsQuery.find(searchDto);
  }

  findOne(id: number) {
    return this.orderDetailsQuery.findOne({ id: id });
  }

  update(id: number, UpdateOrderDetailDto: UpdateOrderDetailDto) {
    return this.orderDetailsQuery.upsert({ id: id, ...UpdateOrderDetailDto });
  }

  remove(id: number) {
    return this.orderDetailsQuery.remove(id);
  }
}
