import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { Actor } from './modules/actors/models/actor.model';
import { AdminModule } from './modules/admin/admin.module';
import { AuthModule } from './modules/auth/auth.module';
import { Comment } from './modules/comments/models/comment.model';
import { FileModule } from './modules/file/file.module';
import { Genere } from './modules/geners/models/genere.model';
import { GenereMovie } from './modules/genere_movie/models/genere_movie.model';
import { Like } from './modules/likes/models/like.model';
import { Movie } from './modules/movies/models/movie.model';
import { MovieActor } from './modules/movie_actor/models/movie_actor.model';
import { Order } from './modules/orders/models/order.model';
import { Payment } from './modules/payments/models/payment.model';
import { Subscription } from './modules/subscriptions/models/subscription.model';
import { User } from './modules/users/models/user.model';
import { UserDeviceModule } from './modules/user_device/user_device.module';
import { WalletModule } from './modules/wallet/wallet.module';
import { WatchedMovie } from './modules/watched_movies/models/watched_movie.model';
import { APP_FILTER, APP_GUARD } from '@nestjs/core';
import { CheckAuthGuard } from './guards/check-auth.guard';
import { AllExceptionsFilter } from './filters/exception-hendler';
import { UserModule } from './modules/users';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true, 
    }),
    Actor,
    AdminModule,
    AuthModule,
    Comment,
    FileModule,
    Genere,
    GenereMovie,
    Like,
    Movie,
    MovieActor,
    Order,
    Payment,
    Subscription,
    User,
    UserModule,
    UserDeviceModule,
    WalletModule,
    WatchedMovie,
  ],
  providers: [
    {
      provide: APP_GUARD,
      useClass: CheckAuthGuard,
    },
    {
      provide: APP_FILTER,
      useClass: AllExceptionsFilter,
    },
  ],
})
export class AppModule { }
