import React from 'react'

const genres = [
    "Science Fiction",
    "Fantasy",
    "Mystery",
    "Romance",
    "Thriller",
    "Horror",
    "Historical Fiction",
    "Young Adult",
    "Biography",
    "Self-Help",
    "Crime",
    "Adventure",
    "Dystopian",
    "Comedy",
    "Graphic Novel"
]

const GenreList = () => {
    return (
        <>
            <div className='flex flex-col gap-10 ml-6 mt-6 lg:mt-0 mb-16'>
                <header className='text-white font-bold text-3xl font-Bebas lg:mt-4'>
                    GENRES
                </header>
                <div>
                    <ul className='flex gap-6 flex-wrap lg:block'>
                        {
                            genres.map((genre, index) => (
                                <li className='mb-3 text-white text-[16px] font-Righteous hover:text-yellow-200 cursor-pointer' key={index}>{genre}</li>
                            ))
                        }
                    </ul>
                </div>

            </div>
        </>
    )
}

export default GenreList