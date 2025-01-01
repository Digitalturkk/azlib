package project.lib_app.Services;

import project.lib_app.DTO.BooksResponse;
import project.lib_app.Models.Books;


public interface BooksService {
    BooksResponse getAllBooks(Integer page, Integer size);
    Books getBookById(Long id);
    void saveBook(Books book);
    void deleteBook(Long id);

    BooksResponse findByTitleContaining(String title, Integer page, Integer size);
}
