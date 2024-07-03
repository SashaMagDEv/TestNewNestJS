import { CategoryService } from '../services/category.service';
export declare class CategoryController {
    private readonly categoryService;
    constructor(categoryService: CategoryService);
    getAllCategories(): Promise<any>;
    getCategoryById(id: number): Promise<any>;
}
