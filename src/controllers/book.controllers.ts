import { bookModel } from "../models/schema/book.model";
export class BookController {
  static getCreatePage(req, res) {
    res.render("create");
  }
  static async createBook(req, res) {
    console.log(req.body);
    try {
      const book = new bookModel(req.body);
      if (book) {
        await book.save();
        res.redirect("/book/list");
      } else {
        res.render("error");
      }
    } catch (err) {
      res.render("error");
    }
  }
  static async getListBooksPage (req,res){
    try{
        const bookList = await bookModel.find();
        res.render ('list',{books:bookList})
    } catch (err) {
        res.render("error");
      }
  }
  static async getUpdatePage (req,res){
    try{
        let id = req.params.id;
        let bookUpdate = await bookModel.findOne({_id:id})
    
        if(bookUpdate){
            res.render('update',{book:bookUpdate})
        } else{
            res.render ("Error")
        }
    } catch (err) {
        res.render("error");
      }
  }
  static async updateBook (req,res){
    try{
        let id = req.params.id;
        let {title,author,description}=req.body
        let bookUpdate = await bookModel.findOne({_id:id})
        bookUpdate.title = title;
        bookUpdate.author = author;
        bookUpdate.description = description;
        bookUpdate.save();
        res.redirect('/book/list')
    } catch (err) {
        res.render("error");
      }
  }
  static async deleteBook(req,res){
    try{
        let id = req.params.id;
        if(id){
            await bookModel.deleteOne({_id:id})
            return res.json({
                status: "success",
                message: "Book deleted successfully",
            })
        } else {
            return res.json({
                status: "error",
                message: "Book deleted not found"
            })
        }
    } catch (err) {
        res.render("error");
      }
  }
}
