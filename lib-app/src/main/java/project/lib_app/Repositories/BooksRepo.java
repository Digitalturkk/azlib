package project.lib_app.Repositories;

import project.lib_app.Models.Books;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BooksRepo extends JpaRepository<Books, Long> {
}
