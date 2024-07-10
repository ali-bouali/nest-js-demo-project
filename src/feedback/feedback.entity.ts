import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { BaseEntity } from '../common/base-entity';
import { Book } from '../book/book.entity';

@Entity({ name: 'feedback' })
export class Feedback extends BaseEntity {
  @Column({ default: 0 })
  note: number;
  @Column()
  comment: string;
  @ManyToOne(() => Book, (book) => book.feedbacks)
  @JoinColumn({ name: 'book_id' })
  book: Book;
}
