export class BookModel {
  id: number;
  title: string;
  author: string;
  genre: string;
  language: string;
  description?: string;
  img?: string;
  url?: string;

    constructor(id: number, title: string, author: string, genre: string, language: string, description?: string, img?: string, url?: string) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.genre = genre;
        this.language = language;
        this.description = description;
        this.img = img;
        this.url = url;
    }
}

