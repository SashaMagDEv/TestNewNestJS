import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class CategoryService {

    async getAllCategories(): Promise<any> {
        try {
            const response = await axios.get('http://localhost:8000/api/categories');
            return response.data;
        } catch (error) {
            console.error('Error fetching categories:', error);
            throw new HttpException('Failed to load categories', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getCategoryById(id: number): Promise<any> {
        try {
            const response = await axios.get(`http://localhost:8000/api/categories/${id}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching category:', error);
            throw new HttpException('Failed to load category', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async addNews(categoryId: number, newsData: any): Promise<any> {
        try {
            newsData.category_id = categoryId;
            const response = await axios.post(`http://localhost:8000/api/categories/${categoryId}/add-news`, newsData);
            return response.data;
        } catch (error) {
            console.error('Error creating news:', error);
            throw new HttpException('Failed to create news', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getNewsByCategory(id: number, page: number = 1): Promise<any> {
        try {
            const response = await axios.get(`http://localhost:8000/api/categories/${id}/news?page=${page}`);
            console.log();
            return response.data;
        } catch (error) {
            console.error('Error fetching news by category:', error);
            throw new HttpException('Failed to load news', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
