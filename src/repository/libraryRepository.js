import axios from '../custom-axios/axios';

const BookService = {
    fetchBooks: () => {
        return axios.get("/books");
    },
    fetchCategories: () => {
        return axios.get("/categories");
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name, category, bookAuthor, availableCopies) => {
        return axios.post("/books/add", {
            "name" : name,
            "category" : category,
            "bookAuthor" : bookAuthor,
            "availableCopies" : availableCopies
        });
    },
    editBook: (id, name, category, bookAuthor, availableCopies) => {
        return axios.put(`/books/edit/${id}`, {
            "name" : name,
            "category" : category,
            "bookAuthor" : bookAuthor,
            "availableCopies" : availableCopies
        });
    },
    getBook: (id) => {
        return axios.get(`/books/${id}`);
    }
}

export default BookService;
