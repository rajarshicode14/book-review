import React from 'react'
import { AiFillStar } from "react-icons/ai";

const Book = () => {
    return (
        <>
            <div className='grid grid-cols-12 mt-4'>
                <div className='col-span-3'>
                    <img
                        src="https://tecdn.b-cdn.net/img/new/avatars/2.webp"
                        className="w-20 rounded-full m-auto"
                        alt="Avatar" />
                </div>
                <div className='col-span-9 flex flex-col p-2'>
                    <h2 className='font-bold text-white text-[24px] font-Bebas'>Pride and Prejudice</h2>
                    <p className='font-bold text-white text-[14px] flex gap-2 mb-5'>Ratings - 4.5<AiFillStar className='self-center text-yellow-400 text-lg'></AiFillStar></p>
                    <p className='text-gray-300 pr-3 font-mono text-[14px] line-clamp-[24]'>Pride and Prejudice is an 1813 novel of manners by Jane Austen. The novel follows the character development of Elizabeth Bennet, the protagonist of the book, who learns about the repercussions of hasty judgments and comes to appreciate the difference between superficial goodness and actual goodness.

                        Mr Bennet, owner of the Longbourn estate in Hertfordshire, has five daughters, but his property is entailed and can only be passed to a male heir. His wife also lacks an inheritance, so his family faces becoming poor upon his death. Thus, it is imperative that at least one of the daughters marry well to support the others, which is a motivation that drives the plot. </p>
                </div>

            </div>
        </>
    )
}

export default Book