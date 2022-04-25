import './App.css';
import React, {Component} from "react";
import Books from "../Book/Book-list/books"
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Header from '../Header/header';
import Categories from '../Categories/categories';
import BookAdd from '../Book/Book-add/book-add'
import BookEdit from '../Book/Book-edit/book-edit'
import BookService from "../../repository/libraryRepository";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      categories: [],
      authors: [],
      selectedBook: {}
    }
  }

  render() {
    return (
        <Router>
          <Header/>
          <main>
            <Routes>
              <Route path={"/categories"} element={
                <Categories categories={this.state.categories}/>}/>
              <Route path={"/books/add"} element={
                <BookAdd categories={this.state.categories}
                         author={this.state.authors}
                         onAddBook={this.addBook}/>}/>
              <Route path={"/books/edit/:id"} element={
                <BookEdit categories={this.state.categories}
                          author={this.state.authors}
                          onEditBook={this.editBook}
                          book={this.state.selectedBook}/>}/>
              <Route path={"/books"} element={
                <Books books={this.state.books}
                       onDelete={this.deleteBook}
                       onEdit={this.getBook}
                       takenBook={this.takenBook}/>}/>
              <Route path={"/"} element={
                <Books books={this.state.books}
                       onDelete={this.deleteBook}
                       onEdit={this.getBook}
                       takenBook={this.takenBook}/>}/>
            </Routes>
          </main>
        </Router>
    );
  }

  componentDidMount() {
    this.loadBooks();
    this.loadAuthors();
    this.loadCategories()
  }

  loadBooks = () => {
    BookService.fetchBooks()
        .then((data) => {
          this.setState({
            books: data.data
          })
        })
  }

  loadCategories = () => {
    BookService.fetchCategories()
        .then((data) => {
          this.setState({
            categories: data.data
          })
        });
  }

    loadAuthors = () => {
        BookService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    deleteBook = (id) => {
        BookService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    takenBook = (id) => {
        BookService.takenBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

  addBook = (name, category, author, availableCopies) => {
    BookService.addBook(name, category, author, availableCopies)
        .then(() => {
          this.loadBooks();
        });
  }

  getBook = (id) => {
    BookService.getBook(id)
        .then((data) => {
          this.setState({
            selectedBook: data.data
          })
        })
  }

  editBook = (id, name, category, author, availableCopies) => {
    BookService.editBook(id, name, category, author, availableCopies)
        .then(() => {
          this.loadBooks();
        });
  }
}

export default App;