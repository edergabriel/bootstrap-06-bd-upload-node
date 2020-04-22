import { EntityRepository, Repository } from 'typeorm';

import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

@EntityRepository(Transaction)
class TransactionsRepository extends Repository<Transaction> {
  public async getBalance(): Promise<Balance> {

    let income = 0;
    let outcome = 0;
    let total = 0;
    /*for (let i=0; i<this.transactions.length; i++) {
      if(this.transactions[i].type == "income") {

        income += this.transactions[i].value;
      } else {
        outcome += this.transactions[i].value;
      }
    }*/

    total = income - outcome;
    return {income: income, outcome: outcome, total: total};
  }
}

export default TransactionsRepository;
