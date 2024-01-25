import { Injectable, Search } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { InternalServerErrorException } from '@nestjs/common';
import { Like } from 'typeorm';
import { Product } from './product.entity';
import { SearchDto } from 'src/users/dto/search.dto';
import { Tag } from 'src/tags/entities/tag.entity';
import { Category } from 'src/category/entities/category.entity';
import { retry } from 'rxjs';
import { TagQuery } from 'src/tags/entities/tag.query';
import { ProductHasTagsQuery } from 'src/product-has-tags/entities/productHasTags.query';
import { ProductHasTags } from 'src/product-has-tags/entities/product-has-tag.entity';
import { MediaQuery } from 'src/media/entities/media.query';

@Injectable()
export class ProductQuery {
  constructor(
    @InjectRepository(Product)
    private readonly productRepository: Repository<Product>,
    @InjectRepository(ProductHasTags)
    private readonly productHasTagsRepository: Repository<ProductHasTags>,

    @InjectRepository(Tag)
    private readonly tagRepository: Repository<Tag>,

    private readonly tagQuery: TagQuery,
    private readonly mediaQuery: MediaQuery,

    private readonly productHasTagsQuery: ProductHasTagsQuery,

    // @InjectRepository(Category)
    // private readonly categoryRepository: Repository<Category>,
  ) {}

  public find(where: SearchDto, relations = []): Promise<Product[]> {
    try {
      const search = Object.keys(where).reduce((acc, key) => {
        acc[key] = Like(`%${where[key]}%`);
        return acc;
      }, {});
      return this.productRepository.find({
        where: search,
        relations: relations,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public findOne(where, relations = []): Promise<Product> {
    try {
      return this.productRepository.findOne({
        where: where,
        relations: relations,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public async upsert(body): Promise<Product> {
    try {
      let object = null;
      const tagsId = [];
      const mediaId = [];
      if (body.id) {
        object = await this.findOne({ id: body.id });
      } else {
        object = new Product();
      }
      if (body.tags) {
        const tags = JSON.parse(body.tags);

        for (const tagName of tags) {
          const tag = await this.tagQuery.upsert({ name: tagName });
          tagsId.push(tag.id);
        }
      }
      console.log("Tags Table Updated")

      // if (body.media) {
      //   const Media = JSON.parse(body.media);
      //   for (const fileName of Media) {
      //     const media = await this.mediaQuery.upsert({ name: fileName });
      //     mediaId.push(media.id);
      //   }
      // }

      object = Object.assign(object, body);
      const savedProduct = await this.productRepository.save(object);
      // const productId= savedproduct.id;
      // return
      for (const tagId of tagsId) {
        const productHasTags = new ProductHasTags();
        productHasTags.productId = savedProduct.id;
        productHasTags.tagId = tagId;
        await this.productHasTagsRepository.save(productHasTags);
      }
      console.log("Product has tags table updated")

      return savedProduct;
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }

  public async remove(id: number): Promise<Product> {
    try {
      return await this.productRepository.softRemove({ id });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
}
