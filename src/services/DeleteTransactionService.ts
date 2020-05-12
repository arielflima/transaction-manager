import { getCustomRepository } from 'typeorm';
import AppError from '../errors/AppError';
import TrasactionsRepository from '../repositories/TransactionsRepository';

interface Request {
  id: string;
}

class DeleteTransactionService {
  public async execute({ id }: Request): Promise<void> {
    const transactionsRepository = getCustomRepository(TrasactionsRepository);

    const transaction = await transactionsRepository.findOne(id);

    if (!transaction) {
      throw new AppError('Transaction does not exists!');
    }

    await transactionsRepository.delete(transaction.id);
  }
}

export default DeleteTransactionService;
