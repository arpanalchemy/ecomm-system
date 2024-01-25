import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { UserHasAddressModule } from './user-has-address/user-has-address.module';
import { UserHasPaymentOptionsModule } from './user-has-payment-options/user-has-payment-options.module';
import { TagsModule } from './tags/tags.module';
import { ColorsModule } from './colors/colors.module';
import { MediaModule } from './media/media.module';
import { CategoryModule } from './category/category.module';
import { ProductsModule } from './products/products.module';
import { OrderModule } from './order/order.module';
import { OrderDetailsModule } from './order-details/order-details.module';
import { SocialsModule } from './socials/socials.module';
import { VariantsModule } from './variants/variants.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseProvider } from 'databse.provider';

// import { AuthModule } from './auth/auth.module';
import { ProductHasTagsModule } from './product-has-tags/product-has-tags.module';
import { ProductHasMediaModule } from './product-has-media/product-has-media.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      //    envFilePath,
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useClass: DatabaseProvider,
    }),
    UsersModule,
    UserHasAddressModule,
    UserHasPaymentOptionsModule,
    TagsModule,
    ColorsModule,
    MediaModule,
    CategoryModule,
    ProductsModule,
    OrderModule,
    OrderDetailsModule,
    SocialsModule,
    VariantsModule,
    ProductHasTagsModule,
    ProductHasMediaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
