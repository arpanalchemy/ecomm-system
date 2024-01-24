import { Injectable } from '@nestjs/common';
import { OrderQuery } from './entities/order.query';
import { CreateColorDto } from 'src/colors/dto/create-color.dto';
import { SearchDto } from 'src/users/dto/search.dto';
import { UpdateColorDto } from 'src/colors/dto/update-color.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { CreateOrderDto } from './dto/create-order.dto';

@Injectable()
export class OrderService {
  constructor(private readonly orderQuery: OrderQuery) {}
  create(createOrderDto: CreateOrderDto) {
    return this.orderQuery.upsert(createOrderDto);
  }

  findAll(searchDto: SearchDto) {
    return this.orderQuery.find(searchDto);
  }

  findOne(id: number) {
    return this.orderQuery.findOne({ id: id });
  }

  update(id: number, updateOrderDto: UpdateOrderDto) {
    return this.orderQuery.upsert({ id: id, ...updateOrderDto });
  }

  remove(id: number) {
    return this.orderQuery.remove(id);
  }
}
