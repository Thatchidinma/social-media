import React from 'react'
import PostCard from './PostCard'
import Categories from './Categories'

const Posts = () => {
    return (
        <div className="w-full flex flex-col gap-8">
            <Categories />
            <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start lg:max-w-[800] m-auto ">
                {["", "", "", "", "", ""].map((items, index) => {
                    return (
                        <PostCard key={index} />
                    )
                })}
            </div>
        </div>
    )
}

export default Posts
