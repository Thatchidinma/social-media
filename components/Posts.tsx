'use client'
import React, { useEffect } from 'react'
import PostCard from './PostCard'
import Categories from './Categories'
import { useGetPosts } from '@/actions/queries'
import { useInView } from "react-intersection-observer";
import LoadingIcon from './icons/LoadingIcon'
import Skeleton from './Skeleton'
import { useFilter } from '@/context/searchContext'


const Posts = () => {
    const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading } = useGetPosts()
    const { ref, inView } = useInView();
    const { search } = useFilter()


    useEffect(() => {
        if (inView && hasNextPage) {
            fetchNextPage();
        }
    }, [inView, hasNextPage, fetchNextPage]);

    return (
        <div className="w-full flex flex-col gap-8">
            <Categories />
            <div className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start lg:max-w-[800] m-auto ">
                {isLoading ? <Skeleton /> : <>
                    {data?.pages.flat().filter(
                        (post) =>
                            String(post.title)
                                ?.toLowerCase()
                                .includes(search.toLowerCase()) ||
                            String(post.body)
                                ?.toLowerCase()
                                .includes(search.toLowerCase()),
                    ).map((item, index) => {
                        return (
                            <PostCard key={index} title={item.title} body={item.body} id={String(item.id)} />
                        )
                    })}
                    <div ref={ref} className="w-full">
                        {isFetchingNextPage ? <LoadingIcon className='m-auto' /> : ""}
                    </div>
                </>}
            </div>
        </div>
    )
}

export default Posts
