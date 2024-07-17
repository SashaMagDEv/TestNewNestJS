import { Module } from '@nestjs/common';
import { NewsService } from '../services/news.service';
import { NewsController } from '../controllers/news.controller';
import {CategoryService} from "../services/category.service";

@Module({
    providers: [NewsService, CategoryService],
    controllers: [NewsController],
})
export class NewsModule {}