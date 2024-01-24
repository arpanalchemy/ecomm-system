import { Injectable } from '@nestjs/common';
import { SocialQuery } from './entities/social.query';
import { CreateSocialDto } from './dto/create-social.dto';
import { SearchDto } from 'src/users/dto/search.dto';
import { UpdateSocialDto } from './dto/update-social.dto';

@Injectable()
export class SocialsService {
  constructor(private readonly socialQuery: SocialQuery) {}
  create(CreateSocialDto: CreateSocialDto) {
    return this.socialQuery.upsert(CreateSocialDto);
  }

  findAll(searchDto: SearchDto) {
    return this.socialQuery.find(searchDto);
  }

  findOne(id: number) {
    return this.socialQuery.findOne({ id: id });
  }

  update(id: number, UpdateSocialDto: UpdateSocialDto) {
    return this.socialQuery.upsert({ id: id, ...UpdateSocialDto });
  }

  remove(id: number) {
    return this.socialQuery.remove(id);
  }
}
