import { Module } from '@nestjs/common';
import { VariantsService } from './variants.service';
import { VariantsController } from './variants.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Variant } from './entities/variant.entity';
import { VaraintQuery } from './entities/variant.query';

@Module({
  imports: [TypeOrmModule.forFeature([Variant])],
  controllers: [VariantsController],
  providers: [VariantsService, VaraintQuery],
})
export class VariantsModule {}
