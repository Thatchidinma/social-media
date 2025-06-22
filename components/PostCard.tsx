import Image from 'next/image'
import React from 'react'
import Divider from './divider'
import sample from "@/public/sample.webp"
import Link from 'next/link'

const PostCard = () => {
    return (
        <Link href={'/m'} className="not-[:last-child]:border-b border-neutral-300 dark:border-neutral-700">
            <div className='flex flex-col md:flex-row p-8 gap-4 items-center cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900 hover:scale-[99%] '>
                <Image src={sample} alt='thumbnail' width={300} height={300} className='w-full h-[200px] lg:w-[300px] lg:h-[300px] object-cover ' />
                <div className="">
                    <h3 className="text-[#4F46E5] text-xl md:text-2xl lg:text-3xl font-bold">Title</h3>
                    <div className="flex gap-4 text-neutral-500">
                        <p className="">Author</p>
                        <Divider className='border-neutral-500' />
                        <p className="">Date</p>
                    </div>
                    <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit a, est quaerat iste perspiciatis architecto sapiente obcaecati ullam ab, tempore iure saepe reiciendis dignissimos, maiores nulla quae ea mollitia?</p>
                </div>
            </div>

        </Link>
    )
}

export default PostCard
