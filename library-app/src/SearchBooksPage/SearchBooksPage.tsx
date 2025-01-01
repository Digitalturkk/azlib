import {useState, useEffect} from "react";
import {BookModel} from "../models/BookModel";
import { SearchBook } from "./components/SearchBook";
import { Pagination } from "../Utils/Pagination";

export const SearchBooksPage = () => {
    const [books, setBooks] = useState<BookModel[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage, setBooksPerPage] = useState(5);
    const [totalBooks, setTotalBooks] = useState(0);
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() : void => {

        const fetchBooks = async () => {
            const baseUrl: string = "http://localhost:4000/public/books/get-all-books";

            let url: string = `${baseUrl}?page=${currentPage - 1}&size=${booksPerPage}`;

            try {
                const response = await fetch(url);

                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }

                const responseJson = await response.json();
                console.log("Fetched data:", responseJson); // Debug log

                setTotalBooks(responseJson.totalElements);
                console.log("Total books:", responseJson.totalElements); // Debug log
                setTotalPages(responseJson.totalPages);
                console.log("Total pages:", responseJson.totalPages); // Debug log


                const loadedBooks: BookModel[] = responseJson.booksContent.map((book: any) => ({
                    id: book.id,
                    title: book.title,
                    author: book.author,
                    description: book.description,
                    genre: book.genre,
                    language: book.language,
                    img: book.img,
                    url: book.url,
                }));

                // Debug log
                setBooks(loadedBooks);
                console.log("Loaded books:", loadedBooks);
                setIsLoading(false);
            } catch (error: any) {
                setIsLoading(false);
                setHttpError(error.message);
            }
        }

        fetchBooks();

        window.scrollTo(0, 0);

    }, [currentPage, booksPerPage]);

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        );
    }

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    let lastItem = booksPerPage * currentPage <= totalBooks ? booksPerPage * currentPage : totalBooks;

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="bg-indigo-700 h-20 pt-1 mb-4">
                <div className="m-[1%] flex ">
                    <div className="w-full h-11 align-middle flex justify-center items-center">
                        <label className="text-white bg-indigo-700 text-xl text-center m-[2%] p-2 rounded-3xl h-full font-mono w-1/5">AzLib</label>
                        <input type="text" placeholder="Search for books" className="w-3/5 h-full rounded-2xl p-[1%] text-lg text-indigo-700 placeholder-indigo-400   focus: ring-slate-900" />
                        <button className="bg-indigo-700 w-1/5 h-full text-white font-mono text-lg font-bold ">Find</button>
                    </div>
                </div>
            </div>
            <div className="m-[2%]">
                    {isLoading && <p>Loading...</p>}
                    {books.map(book => (
                                <SearchBook book={book} key={book.id} />
                            ))}
                    {totalPages > 1 && (
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages}
                            paginate={paginate}
                        />
                    )}
            </div>
        </div>
    );
}
