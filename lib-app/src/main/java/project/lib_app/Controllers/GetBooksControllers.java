package project.lib_app.Controllers;

import org.springframework.web.bind.annotation.*;
import project.lib_app.Models.Books;
import org.springframework.beans.factory.annotation.Autowired;
import project.lib_app.Services.BooksService;

import java.util.List;

@RestController
@RequestMapping("public/books/")
public class GetBooksControllers {

    @Autowired
    private BooksService booksService;

    @GetMapping("/get-all-books")
    public List<Books> getAllBooks(@RequestParam(name = "page") Integer page,
                                   @RequestParam(name = "size") Integer size) {
        return booksService.getAllBooks(page,size);
    };

    @GetMapping("/get-book-by-id={id}")
    public Books getBookById(@PathVariable Long id) {
        return booksService.getBookById(id);
    };
}
