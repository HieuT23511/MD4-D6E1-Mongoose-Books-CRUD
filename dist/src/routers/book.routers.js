"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookRouter = void 0;
const express_1 = require("express");
const book_controllers_1 = require("../controllers/book.controllers");
exports.bookRouter = (0, express_1.Router)();
exports.bookRouter.get('/create', book_controllers_1.BookController.getCreatePage);
exports.bookRouter.post('/create', book_controllers_1.BookController.createBook);
exports.bookRouter.get('/list', book_controllers_1.BookController.getListBooksPage);
exports.bookRouter.get('/:id/update', book_controllers_1.BookController.getUpdatePage);
exports.bookRouter.post('/:id/update', book_controllers_1.BookController.updateBook);
exports.bookRouter.get('/:id/delete', book_controllers_1.BookController.deleteBook);
//# sourceMappingURL=book.routers.js.map