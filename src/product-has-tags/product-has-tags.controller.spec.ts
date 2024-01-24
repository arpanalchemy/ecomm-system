import { Test, TestingModule } from '@nestjs/testing';
import { ProductHasTagsController } from './product-has-tags.controller';
import { ProductHasTagsService } from './product-has-tags.service';

describe('ProductHasTagsController', () => {
  let controller: ProductHasTagsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductHasTagsController],
      providers: [ProductHasTagsService],
    }).compile();

    controller = module.get<ProductHasTagsController>(ProductHasTagsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
