import { Body, Controller, Get, HttpCode, Post } from '@nestjs/common';
import { BookService } from './book-service';
import { Book } from './book.entity';

@Controller('/api/v1/books')
export class BookController {
  constructor(private readonly service: BookService) {}

  @Post()
  @HttpCode(204)
  public async save(@Body() book: Book) {
    await this.service.save(book);
  }

  @Get()
  public async findById() {
    return await this.service.findById(1);
  }
}
