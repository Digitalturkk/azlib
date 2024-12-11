package project.lib_app.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import project.lib_app.Repositories.BooksRepo;
import project.lib_app.Models.Books;

import java.util.List;

@Service
public class BooksServiceImpl implements BooksService {


    private final BooksRepo booksRepo;

    public BooksServiceImpl(BooksRepo booksRepo) {
        this.booksRepo = booksRepo;
    }

    @Override
    public List<Books> getAllBooks() {
        return booksRepo.findAll();
    }

    @Override
    public Books getBookById(Long id) {
        return booksRepo.findById(id).orElseThrow(() -> new HttpClientErrorException(HttpStatus.NOT_FOUND));
    }

    @Override
    public void saveBook(Books book) {
        booksRepo.save(book);
    }

    @Override
    public void deleteBook(Long id) {
        booksRepo.deleteById(id);
    }
}
