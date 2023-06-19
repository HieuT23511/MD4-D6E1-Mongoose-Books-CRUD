"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const data_source_1 = require("./src/models/data-source");
const book_routers_1 = require("./src/routers/book.routers");
const app = (0, express_1.default)();
const PORT = 5000;
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(express_1.default.static('./src/public'));
data_source_1.Database.connectDB()
    .then(() => console.log(`DB connected`))
    .catch((error) => console.log(`DB connect error: ${error}`));
app.use('/book', book_routers_1.bookRouter);
app.listen(PORT, "localhost", () => {
    console.log(`App is running at port : http://localhost:${PORT}/book/create`);
});
//# sourceMappingURL=index.js.map