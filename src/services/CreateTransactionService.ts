// import AppError from '../errors/AppError';
import { getRepository } from 'typeorm';
import Transaction from '../models/Transaction';

import TransactionsRepository from "../repositories/TransactionsRepository";
import { getCustomRepository } from 'typeorm';


interface Request {
  title: string,
  type: 'income' | 'outcome',
  value: number,
  category: string,
}

class CreateTransactionService {
  public async execute({title, value, type, category} : Request): Promise<Transaction> {
    const transactionRepository = getCustomRepository(TransactionsRepository);

    const transaction = transactionRepository.create({
      title,
      value,
      type,
    });

    await transactionRepository.save(transaction);
    return transaction;
  }
}

export default CreateTransactionService;
