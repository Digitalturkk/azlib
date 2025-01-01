import React from "react";
import { BookModel } from "../../models/BookModel"

export const SearchBook: React.FC<{ book: BookModel}> = (props) => { // Corrected component name
    console.log("Rendering book:", props.book); // Debug log
    return (
        <div className="">
            <div className=" bg-white p-4 my-4 shadow-xl rounded-lg flex">
                <div className="w-1/4">
                    {props.book.img ?
                        <img src={require(`../../img/covers/${props.book.img}`)} width="400px" className="rounded-lg shadow-lg mb-32"/>
                        :
                        <img src={require("../../img/covers/alinino.jpg")}/>
                    }
                </div>
                <div className="w-1/2">
                    <div className=" m-4">
                        <h1 className="text-indigo-800 font-bold text-5xl m-4">{props.book.title}</h1>
                        <h3 className="text-indigo-700 font-bold text-3xl m-4">{props.book.author}</h3>
                        <p className="text-indigo-500 font-bold text-xl m-4">
                            {props.book.description}
                        </p>
                    </div>
                    <div className=" m-4">
                        <a href={props.book.url}>
                            <button className="m-4 text-2xl bg-indigo-700 rounded-xl text-white p-[2%] font-bold shadow-2xl hover:bg-indigo-800 focus:bg-slate-700">Get The Book</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
