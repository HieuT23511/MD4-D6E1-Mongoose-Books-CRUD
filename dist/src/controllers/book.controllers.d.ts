export declare class BookController {
    static getCreatePage(req: any, res: any): void;
    static createBook(req: any, res: any): Promise<void>;
    static getListBooksPage(req: any, res: any): Promise<void>;
    static getUpdatePage(req: any, res: any): Promise<void>;
    static updateBook(req: any, res: any): Promise<void>;
    static deleteBook(req: any, res: any): Promise<any>;
}
