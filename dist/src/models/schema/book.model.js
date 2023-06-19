"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bookModel = void 0;
const mongoose_1 = require("mongoose");
const bookSchema = new mongoose_1.Schema({
    title: String,
    description: String,
    author: String,
});
exports.bookModel = (0, mongoose_1.model)('book', bookSchema);
//# sourceMappingURL=book.model.js.map