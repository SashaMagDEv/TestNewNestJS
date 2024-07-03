import { Controller, Get, Param, Res } from '@nestjs/common';
import { NewsService } from '../services/news.service';
import { Response } from 'express';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) {}

    @Get()
    findAll() {
        return this.newsService.findAll();
    }

    @Get('category/:categoryId')
    findByCategory(@Param('categoryId') categoryId: number) {
        return this.newsService.findByCategory(categoryId);
    }

    @Get(':id')
    findById(@Param('id') id: number) {
        return this.newsService.findById(id);
    }

    @Get('template/:id')
    async getNewsAsTemplate(@Param('id') id: number, @Res() res: Response) {
        const newsItem = this.newsService.findById(id);
        return res.render('news.hbs', {
            news: newsItem,
        });
    }
}
