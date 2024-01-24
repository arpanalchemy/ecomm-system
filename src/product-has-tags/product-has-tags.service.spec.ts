import { Test, TestingModule } from '@nestjs/testing';
import { ProductHasTagsService } from './product-has-tags.service';

describe('ProductHasTagsService', () => {
  let service: ProductHasTagsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProductHasTagsService],
    }).compile();

    service = module.get<ProductHasTagsService>(ProductHasTagsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
