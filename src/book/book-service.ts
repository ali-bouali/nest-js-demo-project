import { Injectable } from '@nestjs/common';
import { Book } from './book.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class BookService {
  constructor(
    @InjectRepository(Book)
    private bookRepository: Repository<Book>,
  ) {}

  public async save(book: Book) {
    await this.bookRepository.save(book);
  }

  public async findById(id: number) {
    return await this.bookRepository.findOneBy({ id: id });
  }
}
