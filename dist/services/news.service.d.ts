import { NewsDto } from '../dto/news.dto';
export declare class NewsService {
    private news;
    findAll(): NewsDto[];
    findByCategory(categoryId: number): NewsDto[];
    findById(id: number): NewsDto;
}
