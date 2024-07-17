import { Controller, Get, Param, Post, Body, Query, Render, Res } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import { Response } from 'express';

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    @Render('categories')
    async getAllCategories() {
        try {
            const categories = await this.categoryService.getAllCategories();
            return { categories };
        } catch (error) {
            return { categories: [], error: 'Failed to load categories' };
        }
    }

    @Get(':id')
    async getCategoryById(@Param('id') id: number) {
        try {
            return await this.categoryService.getCategoryById(id);
        } catch (error) {
            return { error: 'Failed to load category' };
        }
    }

    @Get(':id/add-news')
    @Render('add-news')
    addNewsForm(@Param('id') categoryId: number) {
        return { categoryId };
    }

    @Post(':id/add-news')
    async createNews(@Param('id') categoryId: number, @Body() newsData: any, @Res() res: Response) {
        try {
            await this.categoryService.addNews(categoryId, newsData);
            return res.redirect(`/categories/${categoryId}/news`);
        } catch (error) {
            console.error('Error creating news:', error);
            return res.render('add-news', { error: 'Failed to create news', news: newsData, categoryId });
        }
    }

    @Get(':id/news')
    @Render('news-category')
    async getNewsByCategory(@Param('id') id: number, @Query('page') page: number = 1) {
        try {
            const data = await this.categoryService.getNewsByCategory(id, page);
            const pages = [];
            for (let i = 1; i <= data.news.last_page; i++) {
                pages.push({
                    number: i,
                    active: i === data.news.current_page ? 'active' : ''
                });
            }

            return {
                category: data.category,
                news: data.news,
                currentPage: data.news.current_page,
                totalPages: data.news.last_page,
                nextPageUrl: `/categories/${id}/news?page=${data.news.current_page + 1}`,
                previousPageUrl: `/categories/${id}/news?page=${data.news.current_page - 1}`,
                firstPageClass: data.news.current_page === 1 ? 'disabled' : '',
                lastPageClass: data.news.current_page === data.news.last_page ? 'disabled' : '',
                prevPageClass: data.news.prev_page_url ? '' : 'disabled',
                nextPageClass: data.news.next_page_url ? '' : 'disabled',
                pages: pages
            };
        } catch (error) {
            return { category: null, news: [], error: 'Failed to load news' };
        }
    }
}