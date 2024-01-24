import { Module } from '@nestjs/common';
import { ColorService } from './colors.service';
import { ColorsController } from './colors.controller';
import { ColorQuery } from './entities/color.query';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Color } from './entities/color.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Color])],
  controllers: [ColorsController],
  providers: [ColorService, ColorQuery],
})
export class ColorsModule {}
