package project.lib_app.Services;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import project.lib_app.DTO.BooksResponse;
import project.lib_app.Models.Books;
import project.lib_app.Repositories.BooksRepo;
import project.lib_app.Models.BooksDTO;

import java.util.List;

@Service
public class BooksServiceImpl implements BooksService {

    private final BooksRepo booksRepo;

    @Autowired
    private ModelMapper modelMapper;

    public BooksServiceImpl(BooksRepo booksRepo) {
        this.booksRepo = booksRepo;
    }

    @Override
    public BooksResponse getAllBooks(Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Books> booksPage = booksRepo.findAll(pageable);
        List<Books> booksContent = booksPage.getContent();

        List<BooksDTO> booksDTO = booksContent.stream()
                .map(book -> modelMapper.map(book, BooksDTO.class))
                .toList();

        return new BooksResponse(booksDTO, booksPage.getNumber(), booksPage.getSize(), booksPage.getTotalPages(), booksPage.getTotalElements(), booksPage.isLast(), booksPage.isFirst());
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

    @Override
    public BooksResponse findByTitleContaining(String title, Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Books> booksPage = booksRepo.findByTitleContaining(title, pageable);
        List<Books> booksContent = booksPage.getContent();

        List<BooksDTO> booksDTO = booksContent.stream()
                .map(book -> modelMapper.map(book, BooksDTO.class))
                .toList();

        return new BooksResponse(booksDTO, booksPage.getNumber(), booksPage.getSize(), booksPage.getTotalPages(), booksPage.getTotalElements(), booksPage.isLast(), booksPage.isFirst());
    }

    @Override
    public BooksResponse findByLanguage(String language, Integer page, Integer size) {
        Pageable pageable = PageRequest.of(page, size);
        Page<Books> booksPage = booksRepo.findByLanguage(language, pageable);
        List<Books> booksContent = booksPage.getContent();

        List<BooksDTO> booksDTO = booksContent.stream()
                .map(book -> modelMapper.map(book, BooksDTO.class))
                .toList();

        return new BooksResponse(booksDTO, booksPage.getNumber(), booksPage.getSize(), booksPage.getTotalPages(), booksPage.getTotalElements(), booksPage.isLast(), booksPage.isFirst());
    }
}
