import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { NewsDto } from '../dto/news.dto'; // Обновите путь к вашему DTO
import axios from 'axios';

@Injectable()
export class NewsService {
    private news: NewsDto[] = [
        // Пример данных новостей
        { id: 1, categoryId: 1, thumbnail: 'thumb1.jpg', title: 'News 1', date: new Date(), shortDescription: 'Short description 1', likes: 10 },
        { id: 2, categoryId: 2, thumbnail: 'thumb2.jpg', title: 'News 2', date: new Date(), shortDescription: 'Short description 2', likes: 20 },
    ];

    async findAll(page: number = 1, perPage: number = 10): Promise<any> {
        try {
            const response = await axios.get(`http://localhost:8000/api/news?page=${page}&perPage=${perPage}`);
            return response.data;
        } catch (error) {
            console.error('Error fetching all news:', error);
            throw new HttpException('Failed to load news', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    findByCategory(categoryId: number): NewsDto[] {
        return this.news.filter(news => news.categoryId === categoryId);
    }

    async getNewsDetail(id: number) {
        try {
            const response = await axios.get(`http://localhost:8000/api/news/${id}`);
            if (!response.data) {
                throw new HttpException('News not found', HttpStatus.NOT_FOUND);
            }
            return response.data;
        } catch (error) {
            console.error('Error fetching news detail:', error);
            throw new HttpException('Failed to load news', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async getNewsForEdit(id: number) {
        try {
            const response = await axios.get(`http://localhost:8000/api/news/${id}`);
            if (!response.data) {
                throw new HttpException('News not found', HttpStatus.NOT_FOUND);
            }
            return response.data;
        } catch (error) {
            console.error('Error fetching news for edit:', error);
            throw new HttpException('Failed to load news', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    async updateNews(id: number, updateData: any) {
        try {
            const response = await axios.put(`http://localhost:8000/api/news/${id}`, updateData);
            if (response.status !== 200) {
                throw new HttpException('Failed to update news', HttpStatus.INTERNAL_SERVER_ERROR);
            }
            return response.data;
        } catch (error) {
            console.error('Error updating news:', error);
            throw new HttpException('Failed to update news', HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
