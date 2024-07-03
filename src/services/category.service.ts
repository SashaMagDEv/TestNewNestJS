import { Injectable } from '@nestjs/common';
import axios from 'axios';




@Injectable()
export class CategoryService {
    async getAllCategories(): Promise<any> {
        try {
            const response = await axios.get('http://laravel-api-url/api/categories');
            return response.data;
        } catch (error) {
            // Обробляйте помилки, якщо такі є
            console.error('Error fetching categories:', error);
            throw error;
        }
    }
}

