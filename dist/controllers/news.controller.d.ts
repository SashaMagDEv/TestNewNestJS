import { NewsService } from '../services/news.service';
import { Response } from 'express';
export declare class NewsController {
    private readonly newsService;
    constructor(newsService: NewsService);
    findAll(): import("../dto/news.dto").NewsDto[];
    findByCategory(categoryId: number): import("../dto/news.dto").NewsDto[];
    findById(id: number): import("../dto/news.dto").NewsDto;
    getNewsAsTemplate(id: number, res: Response): Promise<void>;
}
