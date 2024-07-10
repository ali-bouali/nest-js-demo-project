import { BaseEntity } from '../common/base-entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { Book } from '../book/book.entity';

@Entity({ name: 'book_transaction_history' })
export class BookTransactionHistory extends BaseEntity {
  @Column({ name: 'user_id' })
  userId: string;
  @ManyToOne(() => Book, (book) => book.histories)
  @JoinColumn({ name: 'book_id' })
  book: Book;
  @Column({ default: true })
  returned: boolean;
  @Column({ default: true })
  returnApproved: boolean;
}
