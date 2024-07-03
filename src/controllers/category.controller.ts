import { Controller, Get, Param, Res } from '@nestjs/common';
import { CategoryService } from '../services/category.service';
import axios from 'axios';

@Controller('categories')
export class CategoryController {
    constructor(private readonly categoryService: CategoryService) {}

    @Get()
    async getAllCategories() {
        const response = await axios.get('http://localhost:8000/api/categories');
        return response.data;
    }

    @Get(':id')
    async getCategoryById(@Param('id') id: number) {
        const response = await axios.get(`http://localhost:8000/api/categories/${id}`);
        return response.data;
    }
}