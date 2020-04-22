// import AppError from '../errors/AppError';
import { getRepository } from 'typeorm';
import Transaction from '../models/Transaction';

interface Request {
  name: string,
  value: number,
  type: string,
  category_id: string,
}

class CreateTransactionService {
  public async execute({name, value, type, category_id} : Request): Promise<Transaction> {
    const transactionRepository = getRepository(Transaction);

    const transaction = transactionRepository.create({
      name,
      value,
      type,
      category_id
    });

    await transactionRepository.save(transaction);
    return transaction;
  }
}

export default CreateTransactionService;
