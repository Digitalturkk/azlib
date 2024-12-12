package project.lib_app.Services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
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
    public List<Books> getAllBooks(Integer page, Integer size) {
        Pageable pageDetails = PageRequest.of(page, size);
        Page<Books> booksPage = booksRepo.findAll(pageDetails);
        List<Books> books = booksPage.getContent();
        return books;
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
