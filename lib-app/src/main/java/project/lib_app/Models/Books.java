package project.lib_app.Models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotBlank;

@Entity
@Table(name = "books")
public class Books {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @NotBlank(message = "Id need to be provided")
    @Column(name = "id")
    private Long id;
    @NotBlank(message = "Title need to be provided")
    @Column(name = "title")
    private String title;
    @NotBlank(message = "Author need to be provided")
    @Column(name = "author")
    private String author;
    @NotBlank(message = "Genre need to be provided")
    @Column(name = "genre")
    private String genre;
    @NotBlank(message = "Language need to be provided")
    @Column(name = "language")
    private String language;
    @Column(name = "description")
    private String description;
    @Column(name = "img")
    private String img;
    @Column(name = "url")
    private String url;

    public Books() {
    }

    public Books(String title, String author, String genre, String language, String description, String img, String url) {
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.language = language;
        this.description = description;
        this.img = img;
        this.url = url;
    }

    public @NotBlank(message = "Id is mandatory") Long getId() {
        return id;
    }

    public void setId(@NotBlank(message = "Id is mandatory") Long id) {
        this.id = id;
    }

    public @NotBlank(message = "Title is mandatory") String getTitle() {
        return title;
    }

    public void setTitle(@NotBlank(message = "Title is mandatory") String title) {
        this.title = title;
    }

    public @NotBlank(message = "Author is mandatory") String getAuthor() {
        return author;
    }

    public void setAuthor(@NotBlank(message = "Author is mandatory") String author) {
        this.author = author;
    }

    public @NotBlank(message = "Genre is mandatory") String getGenre() {
        return genre;
    }

    public void setGenre(@NotBlank(message = "Genre is mandatory") String genre) {
        this.genre = genre;
    }

    public @NotBlank(message = "Language is mandatory") String getLanguage() {
        return language;
    }

    public void setLanguage(@NotBlank(message = "Language is mandatory") String language) {
        this.language = language;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getUrl() {
        return url;
    }

    public void setUrl(String url) {
        this.url = url;
    }
}
