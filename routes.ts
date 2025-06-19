import { Router } from 'express';
import {
  getAllBooks,
  getBookDetails,
  rentBook,
  getUserRentals,
  returnBook
} from './services/books';

const router = Router();

// Book routes
router.get('/books', getAllBooks);
router.get('/books/:id', getBookDetails);
router.post('/books/:id/rent', rentBook);

// Rental routes
router.get('/users/:userId/books', getUserRentals);
router.post('/rentals/:rentalId/return', returnBook);

export default router;