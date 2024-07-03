"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsService = void 0;
const common_1 = require("@nestjs/common");
let NewsService = class NewsService {
    constructor() {
        this.news = [
            { id: 1, categoryId: 1, thumbnail: 'thumb1.jpg', title: 'News 1', date: new Date(), shortDescription: 'Short description 1', likes: 10 },
            { id: 2, categoryId: 2, thumbnail: 'thumb2.jpg', title: 'News 2', date: new Date(), shortDescription: 'Short description 2', likes: 20 },
        ];
    }
    findAll() {
        return this.news;
    }
    findByCategory(categoryId) {
        return this.news.filter(news => news.categoryId === categoryId);
    }
    findById(id) {
        return this.news.find(news => news.id == id);
    }
};
exports.NewsService = NewsService;
exports.NewsService = NewsService = __decorate([
    (0, common_1.Injectable)()
], NewsService);
//# sourceMappingURL=news.service.js.map