import { Injectable } from '@nestjs/common';
import { NewsDto } from '../dto/news.dto'; // Обновите путь к вашему DTO

@Injectable()
export class NewsService {
    private news: NewsDto[] = [
        // Пример данных новостей
        { id: 1, categoryId: 1, thumbnail: 'thumb1.jpg', title: 'News 1', date: new Date(), shortDescription: 'Short description 1', likes: 10 },
        { id: 2, categoryId: 2, thumbnail: 'thumb2.jpg', title: 'News 2', date: new Date(), shortDescription: 'Short description 2', likes: 20 },
    ];

    findAll(): NewsDto[] {
        return this.news;
    }

    findByCategory(categoryId: number): NewsDto[] {
        return this.news.filter(news => news.categoryId === categoryId);
    }

    findById(id: number): NewsDto {
        return this.news.find(news => news.id == id);
    }
}
