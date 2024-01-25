import { Test, TestingModule } from '@nestjs/testing';
import { ProductHasMediaService } from './product-has-media.service';

describe('ProductHasMediaService', () => {
  let service: ProductHasMediaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductHasMediaService],
    }).compile();

    service = module.get<ProductHasMediaService>(ProductHasMediaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
