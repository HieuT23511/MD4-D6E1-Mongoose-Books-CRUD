import { Router } from "express";
import { BookController } from "../controllers/book.controllers";

export const bookRouter = Router();

bookRouter.get('/create', BookController.getCreatePage);
bookRouter.post('/create', BookController.createBook);
bookRouter.get('/list',BookController.getListBooksPage);
bookRouter.get('/:id/update',BookController.getUpdatePage);
bookRouter.post('/:id/update',BookController.updateBook);
bookRouter.get('/:id/delete',BookController.deleteBook);
