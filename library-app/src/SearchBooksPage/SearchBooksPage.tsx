import { useState, useEffect } from "react";
import { BookModel } from "../models/BookModel";
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
    const [search, setSearch] = useState("");
    const [searchUrl, setSearchUrl] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [language, setLanguage] = useState("All");

    useEffect((): void => {

        const fetchBooks = async () => {
            const baseUrl: string = "http://localhost:4000/public/books";

            let url: string = '';

            if (searchUrl === "") {
                url = `${baseUrl}/get-all-books?page=${currentPage - 1}&size=${booksPerPage}`;
            } else {
                url = baseUrl + searchUrl;
            }

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

            }

            catch (error: any) {
                setIsLoading(false);
                setHttpError(error.message);
            }
        }

        fetchBooks();

        window.scrollTo(0, 0);

    }, [currentPage, booksPerPage, searchUrl]);

    if (httpError) {
        return (
            <div className='container m-5'>
                <p>{httpError}</p>
            </div>
        );
    }

    const searchHandler = () => {
        if (search === "") {
            setSearchUrl("");
        } else {
            setSearchUrl(`/get-books-by-title?title=${search}&page=0&size=${booksPerPage}`);
        }
    }

    const languageField = (value: string) => {
        if (value === "Rus" || value === "Eng" || value === "Aze" || value === "Turk") {
            setLanguage(value);
            setSearchUrl(`/get-books-by-language?language=${value}&page=0&size=${booksPerPage}`);
        } else {
            setLanguage("All");
            setSearchUrl("");
        }
    }

    const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

    return (
        <div>
            <div className="bg-indigo-700 h-20 pt-1 mb-4">
                <div className="m-[1%] flex ">
                    <div className="w-full h-11 align-middle flex justify-center items-center">
                        <label className="text-white bg-indigo-700 text-xl text-center m-[2%] p-2 rounded-3xl h-full font-mono w-1/5">AzLib</label>
                        <input onKeyDown={e => e.key === 'Enter' ? searchHandler() : false} type="text" placeholder="Search for books" onChange={e => setSearch(e.target.value)}
                            className="w-2/5 h-full rounded-2xl p-[1%] text-lg text-indigo-700 placeholder-indigo-400   focus: ring-slate-900" />
                        <button onClick={() => searchHandler()} type="submit"
                            className="bg-indigo-600 hover:bg-indigo-800 w-[10%] h-full text-white font-mono text-lg font-bold rounded-2xl m-[2%]">Find</button>

                        <div className="h-11 align-middle  w-1/5">
                            <button
                                id="dropdownDefaultButton"
                                onClick={() => setShowDropdown(!showDropdown)}
                                className="bg-indigo-600 hover:bg-indigo-800 w-[60%] h-full text-white font-mono text-lg font-bold rounded-2xl"
                            >
                                Language: {language}
                            </button>
                            {showDropdown && (
                                <ul className="absolute py-2 text-sm bg-indigo-600 text-white rounded-lg shadow mt-1">
                                    <li onClick={() => languageField("All")}>
                                        <a className="block px-4 py-2 hover:bg-indigo-700 text-center w-[150px]">
                                            All
                                        </a>
                                    </li>
                                    <li onClick={() => languageField("Rus")}>
                                        <a className="block px-4 py-2 hover:bg-indigo-700 text-center w-[150px]">
                                            Rus
                                        </a>
                                    </li>
                                    <li onClick={() => languageField("Eng")}>
                                        <a className="block px-4 py-2 hover:bg-indigo-700 text-center w-[150px]">
                                            Eng
                                        </a>
                                    </li>
                                    <li onClick={() => languageField("Aze")}>
                                        <a className="block px-4 py-2 hover:bg-indigo-700 text-center w-[150px]">
                                            Aze
                                        </a>
                                    </li>
                                    <li onClick={() => languageField("Turk")}>
                                        <a className="block px-4 py-2 hover:bg-indigo-700 text-center w-[150px]">
                                            Turk
                                        </a>
                                    </li>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
            {totalBooks > 0 ?
                <>
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
                </>
                :
                <div className="flex items-center justify-center">
                    <img src={require("../img/error/nobooks.jpeg")} alt="No Books Found"
                        className=" w-1/2" />
                    <div className="">
                        <p className="text-left text-5xl font-bold text-indigo-500 w-1/2">No books found!</p>
                        <button onClick={() => setSearchUrl("")} className="text-left text-3xl bg-indigo-700 rounded-xl text-white p-[2%] font-bold shadow-2xl hover:bg-indigo-800 focus:bg-slate-700">Back to Search</button>
                    </div>
                </div>
            }
        </div>
    );
}
