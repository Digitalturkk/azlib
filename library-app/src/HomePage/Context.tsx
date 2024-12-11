export const Context = () => {
    return (
        <div className="m-[2%]">
            <div className="flex m-[2%] shadow-xl">
                <img src={require("../img/bakubc.jpg")} className="w-1/2 rounded-lg" alt="" />
                <div className="w-1/2 m-[2%]">
                <h3 className="text-6xl font-bold text-indigo-600 w-full">Baku Book Centre</h3>
                <p className="mt-[2%] text-lg text-indigo-500"> 
                    The Baku Book Center, established with the initiative and support of the Heydar Aliyev Foundation, 
                    officially opened its doors to visitors on September 1, 2018.
                    The Center offers a diverse selection of books across various genres in Azerbaijani, 
                    Russian, Turkish, English, Chinese, French, German, Arabic, and other languages.
                    Covering 2,500 square meters, the Baku Book Center offers a diverse collection of books 
                    published by the Heydar Aliyev Foundation on both the ground and first floors.
                    In addition, visitors can discover a variety of items, including "I Love Baku" clothes, 
                    souvenirs and accessories, "Azərpoçt” products, bestsellers in different languages, 
                    non-fiction books, classic literature, art albums, and tourist guidebooks.
                    Our main goal at the Baku Book Center is to cultivate a passion for reading
                    and inspire people to connect with books. 
                    We believe that the Baku Book Center will remain a beloved spot for both locals and tourists in our city. 
                </p>
                </div>
            </div>
            <div className="flex m-[2%] shadow-xl">
                <div className="w-1/2">
                <h3 className="text-6xl font-bold text-indigo-600 w-full">The Heydar Aliyev Foundation </h3>
                <p className="mt-[2%] text-lg mr-[2%] text-indigo-500"> 
                    The Heydar Aliyev Foundation has been established on the grounds of the nation's wish to express
                    its esteem for the memory of Heydar Aliyev, who entered our history as a builder of an independent state,
                    and the necessity of reflecting his rich moral heritage, underlining the importance for our country of
                    the philosophy of Azerbaijanism and cultivating the national statehood ideas in our children.
                    Starting its activity since 2004, the Heydar Aliyev Foundation has been actively participating in building 
                    a new society and contributing to the social and economic development of the country, by implementing various projects
                    in spheres such as education, public health, culture, sports, science and technology, environment, and social
                    and other spheres. 
                </p>
                </div>
                <img src={require("../img/haf.jpg")} className="w-1/2 rounded-lg" alt="" />  
            </div>
        </div>
    )
}