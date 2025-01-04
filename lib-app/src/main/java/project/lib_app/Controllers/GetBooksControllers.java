package project.lib_app.Controllers;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import project.lib_app.DTO.BooksResponse;
import project.lib_app.Models.Books;
import org.springframework.beans.factory.annotation.Autowired;
import project.lib_app.Services.BooksService;

@RestController
@RequestMapping("public/books/")
@CrossOrigin(origins = "http://localhost:3000")
public class GetBooksControllers {

    @Autowired
    private BooksService booksService;

    @GetMapping("/get-all-books")
    public ResponseEntity<BooksResponse> getAllBooks(@RequestParam(name = "page") Integer page,
                                                       @RequestParam(name = "size") Integer size) {
        BooksResponse booksResponse = booksService.getAllBooks(page, size);
        return ResponseEntity.ok(booksResponse);
    };

    @GetMapping("/get-books-by-title")
    public ResponseEntity<BooksResponse> getByTitle(@RequestParam("title") String title,
                                                     @RequestParam(name = "page") Integer page,
                                                     @RequestParam(name = "size") Integer size) {
        BooksResponse booksResponse = booksService.findByTitleContaining(title, page, size);
        return ResponseEntity.ok(booksResponse);
    };

    @GetMapping("/get-books-by-language")
    public ResponseEntity<BooksResponse> getByLanguage(@RequestParam("language") String language,
                                                       @RequestParam(name = "page") Integer page,
                                                       @RequestParam(name = "size") Integer size) {
        BooksResponse booksResponse = booksService.findByLanguage(language, page, size);
        return ResponseEntity.ok(booksResponse);
    };

    @GetMapping("/get-book-by-id={id}")
    public Books getBookById(@PathVariable Long id) {
        return booksService.getBookById(id);
    };
}
