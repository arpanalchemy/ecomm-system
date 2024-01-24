import { Injectable } from '@nestjs/common';
import { VaraintQuery } from './entities/variant.query';
import { CreateVariantDto } from './dto/create-variant.dto';
import { SearchDto } from 'src/users/dto/search.dto';
import { UpdateVariantDto } from './dto/update-variant.dto';

@Injectable()
export class VariantsService {
  constructor(private readonly variantQuery: VaraintQuery) {}
  create(createVariantDto: CreateVariantDto) {
    return this.variantQuery.upsert(createVariantDto);
  }

  findAll(searchDto: SearchDto) {
    return this.variantQuery.find(searchDto);
  }

  findOne(id: number) {
    return this.variantQuery.findOne({ id: id });
  }

  update(id: number, updateVariantDto: UpdateVariantDto) {
    return this.variantQuery.upsert({ id: id, ...updateVariantDto });
  }

  remove(id: number) {
    return this.variantQuery.remove(id);
  }
}
