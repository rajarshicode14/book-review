import React from 'react'
import Reviews from './Reviews'
import { Pagination } from './Pagination'

const UserReviews = () => {
    return (
        <>
            <div className='grid gap-10 md:mt-4'>
                <div className='font-Righteous font-extrabold text-5xl text-orange-700 h-fit ml-3'>98 REVIEWS</div>
                <div className='grid grid-cols-12 gap-2 mx-3'>
                    <Reviews />
                    <Reviews />
                    <Reviews />
                    <Reviews />
                    <Reviews />
                    <Reviews />
                    {/* <Reviews />
                    <Reviews />
                    <Reviews /> */}
                    {/* <Reviews />
                    <Reviews />
                    <Reviews /> */}
                </div>
                <div className='justify-self-center -mt-10'>

                    <Pagination />
                </div>
            </div>
        </>
    )
}
export default UserReviews