import { Injectable } from '@nestjs/common';
import { TagQuery } from './entities/tag.query';
import { CreateColorDto } from 'src/colors/dto/create-color.dto';
import { SearchDto } from 'src/users/dto/search.dto';
import { UpdateColorDto } from 'src/colors/dto/update-color.dto';

@Injectable()
export class TagsService {
  constructor(private readonly tagQuery: TagQuery) {}
  create(createcolorDto: CreateColorDto) {
    return this.tagQuery.upsert(createcolorDto);
  }

  findAll(searchDto: SearchDto) {
    return this.tagQuery.find(searchDto);
  }

  findOne(id: number) {
    return this.tagQuery.findOne({ id: id });
  }

  update(id: number, updateRoleDto: UpdateColorDto) {
    return this.tagQuery.upsert({ id: id, ...updateRoleDto });
  }

  remove(id: number) {
    return this.tagQuery.remove(id);
  }
}
