'use client'
import Image from 'next/image';
import React from 'react'
import postImage from '@/public/sample.webp'
import { ArrowLeft } from 'iconsax-react';
import { useRouter } from 'next/navigation';

type PageProps = {
    slug: string;
};

const Content = ({ slug }: PageProps) => {
    const router = useRouter()
    return (
        <div className='h-[calc(100vh_-_91px)] overflow-scroll p-8 font-[family-name:var(--font-geist-sans)] flex flex-col gap-8'>
            <div onClick={()=> router.back()} className="flex gap-2 items-center cursor-pointer text-[#4F46E5] font-semibold">
                <ArrowLeft color='currentColor' size={30} />
                <p className="">Back</p>
            </div>
            <div className='w-full h-[200px]'>
                <Image src={postImage} alt='post image' height={200} width={1000} className='w-full h-full object-cover' />
            </div>
            <div className="flex flex-col gap-8 w-full max-w-[900px] mx-auto">
                <div className="flex justify-between text-neutral-500">
                    <div className="">
                        <h1 className="text-[#4F46E5] text-xl md:text-2xl lg:text-4xl font-bold">
                            Title
                        </h1>
                        <p className="">author</p>
                    </div>

                    <p className="">date</p>
                </div>
                <div className="lg:max-w-[800px] m-auto">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste quis quia sapiente libero doloremque quibusdam architecto dolor, autem rerum harum, voluptate sequi odit. Voluptas quisquam ullam repellat distinctio eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores ipsum quisquam sint placeat eos illum assumenda nam obcaecati repellendus explicabo ipsa, et praesentium eveniet debitis fugiat magni consequatur. Ab?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus unde voluptates doloremque quisquam at facere molestias minus impedit ipsa architecto earum voluptate ad, cumque necessitatibus esse amet laudantium reprehenderit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus, numquam enim facilis magnam nemo mollitia ab qui velit quaerat fugit ipsa sequi consequuntur amet repellat dignissimos sed maiores ad.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste quis quia sapiente libero doloremque quibusdam architecto dolor, autem rerum harum, voluptate sequi odit. Voluptas quisquam ullam repellat distinctio eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores ipsum quisquam sint placeat eos illum assumenda nam obcaecati repellendus explicabo ipsa, et praesentium eveniet debitis fugiat magni consequatur. Ab?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus unde voluptates doloremque quisquam at facere molestias minus impedit ipsa architecto earum voluptate ad, cumque necessitatibus esse amet laudantium reprehenderit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus, numquam enim facilis magnam nemo mollitia ab qui velit quaerat fugit ipsa sequi consequuntur amet repellat dignissimos sed maiores ad.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste quis quia sapiente libero doloremque quibusdam architecto dolor, autem rerum harum, voluptate sequi odit. Voluptas quisquam ullam repellat distinctio eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores ipsum quisquam sint placeat eos illum assumenda nam obcaecati repellendus explicabo ipsa, et praesentium eveniet debitis fugiat magni consequatur. Ab?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus unde voluptates doloremque quisquam at facere molestias minus impedit ipsa architecto earum voluptate ad, cumque necessitatibus esse amet laudantium reprehenderit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus, numquam enim facilis magnam nemo mollitia ab qui velit quaerat fugit ipsa sequi consequuntur amet repellat dignissimos sed maiores ad.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste quis quia sapiente libero doloremque quibusdam architecto dolor, autem rerum harum, voluptate sequi odit. Voluptas quisquam ullam repellat distinctio eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores ipsum quisquam sint placeat eos illum assumenda nam obcaecati repellendus explicabo ipsa, et praesentium eveniet debitis fugiat magni consequatur. Ab?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus unde voluptates doloremque quisquam at facere molestias minus impedit ipsa architecto earum voluptate ad, cumque necessitatibus esse amet laudantium reprehenderit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus, numquam enim facilis magnam nemo mollitia ab qui velit quaerat fugit ipsa sequi consequuntur amet repellat dignissimos sed maiores ad.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum iste quis quia sapiente libero doloremque quibusdam architecto dolor, autem rerum harum, voluptate sequi odit. Voluptas quisquam ullam repellat distinctio eos? Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores dolores ipsum quisquam sint placeat eos illum assumenda nam obcaecati repellendus explicabo ipsa, et praesentium eveniet debitis fugiat magni consequatur. Ab?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusamus unde voluptates doloremque quisquam at facere molestias minus impedit ipsa architecto earum voluptate ad, cumque necessitatibus esse amet laudantium reprehenderit.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure ducimus, numquam enim facilis magnam nemo mollitia ab qui velit quaerat fugit ipsa sequi consequuntur amet repellat dignissimos sed maiores ad.
                </div>

            </div>
        </div>
    )
}

export default Content
