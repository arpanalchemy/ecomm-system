import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { SearchDto } from 'src/users/dto/search.dto';
import { OrderDetailsService } from './order-details.service';
import { CreateOrderDetailDto } from './dto/create-order-detail.dto';
import { UpdateOrderDetailDto } from './dto/update-order-detail.dto';

@ApiTags('Order Details')
@Controller('order-details')
export class OrderDetailsController {
  constructor(private readonly orderDetailsService: OrderDetailsService) {}

  @Post()
  @ApiOperation({ summary: 'Create a new Order-Detail' })
  create(@Body() CreateOrderDetailDto: CreateOrderDetailDto) {
    return this.orderDetailsService.create(CreateOrderDetailDto);
  }

  @Get()
  @ApiOperation({ summary: 'Find All Order Details' })
  findAll(@Query() searchDto: SearchDto) {
    return this.orderDetailsService.findAll(searchDto);
  }

  @Get(':id')
  @ApiOperation({ summary: 'Find Order Detail By Id' })
  findOne(@Param('id') id: string) {
    return this.orderDetailsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update Order Detail By Id' })
  update(
    @Param('id') id: string,
    @Body() UpdateOrderDetailDto: UpdateOrderDetailDto,
  ) {
    return this.orderDetailsService.update(+id, UpdateOrderDetailDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Remove Order Detail' })
  remove(@Param('id') id: string) {
    return this.orderDetailsService.remove(+id);
  }
}
