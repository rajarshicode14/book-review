import React, { useState } from 'react'
import Book from './Book'
import UserReviews from './UserReviews'
import GenreList from './GenreList'
import PostReview from './PostReview'

const ReviewContainer = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <div className='grid'>
                <div className='bg-yellow-400'>1</div>

                <div className='grid md:grid-cols-12 grid-cols-1'>
                    <div className='bg-purple-700 md:col-span-4 lg:col-span-3 flex flex-col justify-start'>
                        <Book />
                        <button onClick={() => setOpen(!open)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4 mx-auto mb-6 md:mb-0">
                            Post a Review
                        </button>
                        {open ? <PostReview open = {open} setOpen={setOpen} /> : ''}
                    </div>
                    <div className='md:col-span-8 lg:col-span-7 mt-8 md:mt-0'><UserReviews /></div>
                    <div className='bg-red-400 md:col-span-12 lg:col-span-2'><GenreList /></div>
                </div>
            </div>
        </>
    )
}

export default ReviewContainer