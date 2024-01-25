import { Test, TestingModule } from '@nestjs/testing';
import { ProductHasMediaController } from './product-has-media.controller';
import { ProductHasMediaService } from './product-has-media.service';

describe('ProductHasMediaController', () => {
  let controller: ProductHasMediaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ProductHasMediaController],
      providers: [ProductHasMediaService],
    }).compile();

    controller = module.get<ProductHasMediaController>(
      ProductHasMediaController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
