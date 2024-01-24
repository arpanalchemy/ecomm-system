import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { User } from './user.entity';
import { Like } from 'typeorm';
import { SearchDto } from '../dto/search.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserQuery {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  public find(query: SearchDto, relations = []): Promise<User[]> {
    try {
      //  console.log(where)

      const skip = (query.pageNumber - 1) * query.limit;
      let where = null;
      if (query?.search) {
        where = { name: Like('%' + query.search + '%') };
      }
      return this.userRepository.find({
        where,
        relations: relations,
        skip: skip,
        take: query.limit,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  public findOne(where, relations = []): Promise<User> {
    try {
      return this.userRepository.findOne({
        where: where,
        // select:["id","email","password"],
        relations: relations,
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }
  //   public findByEmail(where, relations = []): Promise<User[]> {
  //     try {
  //       return this.userRepository.find({
  //         where: where,
  //         relations: relations,
  //       });
  //     } catch (error) {
  //       console.log(error);
  //       if (error?.response?.statusCode !== 500) throw error;
  //       throw new InternalServerErrorException();
  //     }
  //   }
  // public async upsert(body): Promise<User> {
  //   try {
  //     let object = null;
  //     if (body.id) {
  //       object = await this.findOne({ id: body.id });
  //     } else {
  //       object = new User();
  //     }
  //     object = Object.assign(object, body);
  //     return await this.userRepository.save(object);
  //   } catch (error) {
  //     console.log(error);
  //     if (error?.response?.statusCode !== 500) throw error;
  //     throw new InternalServerErrorException();
  //   }
  // }

  public async upsert(body): Promise<User> {
    try {
      let object = null;
      if (body.id) {
        object = await this.findOne({ id: body.id });
      } else {
        object = new User();
      }

      // Check if the body has a password field
      if (body.password) {
        // Hash the password before saving
        const hashedPassword = await bcrypt.hash(body.password, 10);
        body.password = hashedPassword;
      }

      object = Object.assign(object, body);
      return await this.userRepository.save(object);
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }

  public async remove(id: number): Promise<User> {
    try {
      return await this.userRepository.softRemove({ id });
    } catch (error) {
      console.log(error);
      if (error?.response?.statusCode !== 500) throw error;
      throw new InternalServerErrorException();
    }
  }

  //   public async changePassword(
  //     userId: number,
  //     changePasswordDto: changePasswordDto,
  //   ): Promise<User> {
  //     try {
  //       const user = await this.userRepository.findOne({ where: { id: userId } });
  //       if (!user) {
  //         throw new NotFoundException("User not found");
  //       }
  //       const isPasswordValid = await bcrypt.compare(
  //         changePasswordDto.currentPassword,
  //         user.password,
  //       );
  //       if (!isPasswordValid) {
  //         throw new UnauthorizedException("Invalid current password");
  //       }
  //       user.password = await bcrypt.hash(changePasswordDto.newPassword, 10);
  //       await this.userRepository.save(user);
  //       return user;
  //     } catch (error) {
  //       console.log(error);
  //       if (error?.response?.statusCode !== 500) throw error;
  //       throw new InternalServerErrorException();
  //     }
  //   }
}
