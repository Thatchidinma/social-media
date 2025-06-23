'use client'
import Image from 'next/image';
import React, { useEffect } from 'react'
import postImage from '@/public/sample.webp'
import { ArrowLeft } from 'iconsax-react';
import { useRouter } from 'next/navigation';
import { useGetPost } from '@/actions/queries';

type PageProps = {
    slug: string;
};

const Content = ({ slug }: PageProps) => {
    const router = useRouter()
    const { data, isLoading, isError } = useGetPost(slug)
    useEffect(() => {
        if (!data && !isLoading) {
            router.back()
        }
    }, [isError, data, isLoading, router])
    return (
        <div className='h-[calc(100vh_-_91px)] overflow-scroll p-8 font-[family-name:var(--font-geist-sans)] flex flex-col gap-8'>
            <div onClick={() => router.back()} className="flex gap-2 items-center cursor-pointer text-[#4F46E5] font-semibold">
                <ArrowLeft color='currentColor' size={30} />
                <p className="">Back</p>
            </div>
            <div className='w-full h-[200px]'>
                <Image src={postImage} alt='post image' height={200} width={1000} className='w-full h-full object-cover' />
            </div>
            <div className="flex flex-col gap-8 w-full max-w-[900px] mx-auto">
                <div className="flex justify-between gap-4 text-neutral-500">
                    <div className="">
                        <h1 className={`${isLoading ? 'skeleton h-4 rounded-3xl w-[800px]' : ''} text-[#4F46E5] text-xl md:text-2xl lg:text-4xl font-bold`}>
                            {isLoading ? "" : data?.title}
                        </h1>
                        <p className="">B .A .Bels</p>
                    </div>

                    <p className="text-nowrap">20 Apri, 25</p>
                </div>
                <div className={`${isLoading ? 'skeleton h-4 rounded-3xl w-[800px]' : ''} lg:max-w-[800px] m-auto `}>
                    {isLoading ? "" : data?.body}
                </div>

            </div>
        </div>
    )
}

export default Content
