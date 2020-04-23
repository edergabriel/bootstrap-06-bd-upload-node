import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import Category from './Category';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;
  
  @Column()
  type: 'income' | 'outcome';

  @Column('decimal')
  value: number;

  @ManyToOne(() => Category)
  @JoinColumn({ name: 'category_id'})
  category_id: string;
  
  @CreateDateColumn()
  @Column('timestamp with time zone')
  created_at: Date;

  @UpdateDateColumn()
  @Column('timestamp with time zone')
  updated_at: Date;
}

export default Transaction;
