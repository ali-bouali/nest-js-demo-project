import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from '../common/base-entity';
import { Feedback } from '../feedback/feedback.entity';
import { BookTransactionHistory } from '../history/book-transaction-history.entity';

@Entity({ name: 'book' })
export class Book extends BaseEntity {
  @Column()
  title: string;
  @Column()
  authorName: string;
  @Column()
  isbn: string;
  @Column()
  synopsis: string;
  @Column({ nullable: true })
  bookCover: string;
  @Column({ default: false })
  archived: boolean;
  @Column({ default: true })
  shareable: boolean;
  @OneToMany(() => Feedback, (feedback) => feedback.book)
  feedbacks: Feedback[];
  @OneToMany(() => BookTransactionHistory, (history) => history.book)
  histories: BookTransactionHistory[];
}
