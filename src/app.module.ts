import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReportsModule } from './reports/reports.module';
import {CategoryModule} from "./category/category.module";
import { NewsModule } from './news/news.module';

@Module({
  imports: [CategoryModule, NewsModule, ReportsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
