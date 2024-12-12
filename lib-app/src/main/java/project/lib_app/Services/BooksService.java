package project.lib_app.Services;

import project.lib_app.Models.Books;

import java.util.List;

public interface BooksService {
    List<Books> getAllBooks(Integer page, Integer size);
    Books getBookById(Long id);
    void saveBook(Books book);
    void deleteBook(Long id);
}
