import { Module } from "@nestjs/common";
import { UsersController } from "../controller/userController";
import { UsersService } from "../service/userService";
// import { UsersModule } from '../module/userModule';
import { TypeOrmModule } from "@nestjs/typeorm";
import { ConfigModule } from "@nestjs/config";
import { User } from "../entity/user";
import { UserRepository } from "../repository/userRepository";
import {Event} from "../entity/event";
import {EventsRepository} from "../repository/eventRepository";

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forFeature([User]),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.DB_HOST,
      port: +process.env.DB_PORT,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
      socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
    }),
  ],
  controllers: [UsersController],
  providers: [UsersService, UserRepository],
})
export class UserModule {}
