// 3.make  A Book API.
// You should apply the concepts learned from  JavaScript Design Patterns
//  and develop a Web Service for a book lending paltform. 
// Book model
class Book {
    constructor(id, title, author, genre) {
      this.id = id;
      this.title = title;
      this.author = author;
      this.genre = genre;
    }
  }
  
  // Book service
  class BookService {
    constructor() {
      this.books = [];
    }
  
    // Create a new book
    createBook(book) {
      this.books.push(book);
    }
  
    // Get all books
    getAllBooks() {
      return this.books;
    }
  
    // Get a book by ID
    getBookById(id) {
      return this.books.find((book) => book.id === id);
    }
  
    // Update a book by ID
    updateBookById(id, book) {
      const existingBook = this.books.find((book) => book.id === id);
      if (existingBook) {
        existingBook.title = book.title;
        existingBook.author = book.author;
        existingBook.genre = book.genre;
      }
    }
  
    // Delete a book by ID
    deleteBookById(id) {
      const bookIndex = this.books.findIndex((book) => book.id === id);
      if (bookIndex !== -1) {
        this.books.splice(bookIndex, 1);
      }
    }
  }
  
  // Create a new instance of the book service
  const bookService = new BookService();
  
  // Create a new book
  const book1 = new Book(1, "The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "Science Fiction");
  bookService.createBook(book1);
  
  // Get all books
  const allBooks = bookService.getAllBooks();
  console.log(allBooks);
  
  // Get a book by ID
  const book2 = bookService.getBookById(2);
  console.log(book2);
  
  // Update a book by ID
  const updatedBook = new Book(2, "The Hitchhiker's Guide to the Galaxy", "Douglas Adams", "Comedy");
  bookService.updateBookById(2, updatedBook);
  
  // Delete a book by ID
  bookService.deleteBookById(1);
  
  // Get all books again
  const allBooksAfterDelete = bookService.getAllBooks();
  console.log(allBooksAfterDelete);
  