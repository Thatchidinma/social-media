import React from 'react'
import Content from './slugContent';

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const page = async ({ params }: PageProps) => {
  const { slug } = await params
  
  return (
    <div className=''>
      <Content slug={slug}/>
    </div>
  )
}

export default page
