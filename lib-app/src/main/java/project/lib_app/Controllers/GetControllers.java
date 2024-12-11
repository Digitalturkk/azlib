package project.lib_app.Controllers;

import org.springframework.web.bind.annotation.PathVariable;
import project.lib_app.Models.Books;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import project.lib_app.Services.BooksService;

import java.util.List;

@RestController
@RequestMapping("public/books/")
public class GetControllers {

    @Autowired
    private BooksService booksService;

    @GetMapping("/get-all-books")
    public List<Books> getAllBooks() {
        return booksService.getAllBooks();
    };

    @GetMapping("/get-book-by-id={id}")
    public Books getBookById(@PathVariable Long id) {
        return booksService.getBookById(id);
    };
}
