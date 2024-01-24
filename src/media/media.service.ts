import { Injectable } from '@nestjs/common';
import { UpdateMediaDto } from './dto/update-media.dto';
import { CreateMediaDto } from './dto/create-media.dto';
import { MediaQuery } from './entities/media.query';

@Injectable()
export class MediaService {
  constructor(private readonly mediaQuery: MediaQuery) {}
  async create(createMediaDto: CreateMediaDto) {
    return this.mediaQuery.upsert(createMediaDto);
  }

  findAll() {
    return this.mediaQuery.find();
  }

  findOne(id: number) {
    return this.mediaQuery.findOne({ id: id });
  }
  update(id: number, updateMediaDto: UpdateMediaDto) {
    return this.mediaQuery.upsert({ id: id, ...updateMediaDto });
  }

  remove(id: number) {
    return this.mediaQuery.remove(id);
  }
}
