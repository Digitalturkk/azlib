package project.lib_app.DTO;

import project.lib_app.Models.BooksDTO;

import java.util.List;

public class BooksResponse {
    private List<BooksDTO> booksContent;
    private Integer page;
    private Integer size;
    private Integer totalPages;
    private Long totalElements;
    private Boolean last;
    private Boolean first;

    public BooksResponse(List<BooksDTO> booksContent, Integer page, Integer size, Integer totalPages, Long totalElements, Boolean last, Boolean first) {
        this.booksContent = booksContent;
        this.page = page;
        this.size = size;
        this.totalPages = totalPages;
        this.totalElements = totalElements;
        this.last = last;
        this.first = first;
    }

    public List<BooksDTO> getBooksContent() {
        return booksContent;
    }

    public void setBooksContent(List<BooksDTO> booksContent) {
        this.booksContent = booksContent;
    }

    public Integer getPage() {
        return page;
    }

    public void setPage(Integer page) {
        this.page = page;
    }

    public Integer getSize() {
        return size;
    }

    public void setSize(Integer size) {
        this.size = size;
    }

    public Integer getTotalPages() {
        return totalPages;
    }

    public void setTotalPages(Integer totalPages) {
        this.totalPages = totalPages;
    }

    public Long getTotalElements() {
        return totalElements;
    }

    public void setTotalElements(Long totalElements) {
        this.totalElements = totalElements;
    }

    public Boolean getLast() {
        return last;
    }

    public void setLast(Boolean last) {
        this.last = last;
    }

    public Boolean getFirst() {
        return first;
    }

    public void setFirst(Boolean first) {
        this.first = first;
    }
}
