package project.lib_app.Repositories;


import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.RequestParam;
import project.lib_app.Models.Books;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BooksRepo extends JpaRepository<Books, Long> {
    Page<Books> findByTitleContaining(@RequestParam("title") String title, Pageable pageable);
    Page<Books> findByLanguage(@RequestParam("language") String language, Pageable pageable);
}
