import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MainController } from "./main.controller";
import {MainService} from "./main.service";

@Module({
  imports: [],
  controllers: [AppController, MainController],
  providers: [AppService, MainService],
})


export class AppModule {}
