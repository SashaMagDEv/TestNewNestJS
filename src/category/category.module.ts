import { Module } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { CategoryController } from '../controllers/category.controller';
import {NewsService} from "../services/news.service";

@Module({
    providers: [CategoryService, NewsService],
    controllers: [CategoryController],
})
export class CategoryModule {}
