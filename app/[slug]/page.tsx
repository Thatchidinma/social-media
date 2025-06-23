import React from 'react'
import Content from './slugContent';
import { getPost } from '@/actions/posts';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({ params }:PageProps) {
   const post = await getPost((await params).slug)
  return {
    title: post.title,
    description: post.body.slice(0, 150),
    openGraph: {
      title: post.title,
      description: post.body.slice(0, 150),
    },
  };
}

const page = async ({ params }: PageProps) => {
  const { slug } = await params
  return (
    <div className=''>
      <Content slug={slug}/>
    </div>
  )
}

export default page
