import {Controller, Get, Param, Post, Body, Render, Res, Query} from '@nestjs/common';
import { NewsService } from '../services/news.service';
import { Response } from 'express';

@Controller('news')
export class NewsController {
    constructor(private readonly newsService: NewsService) {}

    @Get()
    async findAll(@Query('page') page: number = 1, @Query('perPage') perPage: number = 10) {
        return await this.newsService.findAll(page, perPage);
    }

    @Get(':id')
    @Render('news')
    async getNewsDetail(@Param('id') id: number) {
        const news = await this.newsService.getNewsDetail(id);
        return {news};
    }

    @Get(':id/edit')
    @Render('edit-news')
    async editNewsForm(@Param('id') id: number) {
        const news = await this.newsService.getNewsForEdit(id);
        return { news };
    }

    @Post(':id/edit')
    async editNews(@Param('id') id: number, @Body() updateData: any, @Res() res: Response) {
        try {
            const news = await this.newsService.updateNews(id, updateData);
            return res.redirect(`/news/${id}`);
        } catch (error) {
            console.error('Error updating news:', error);
            return res.render('edit-news', { error: 'Failed to update news', news: updateData });
        }
    }
}
