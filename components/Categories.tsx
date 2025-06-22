import React from 'react'

const Categories = () => {
    const Categories = ['Educative','Food','Tech']
  return (
    <div className='w-full flex gap-4 overflow-x-scroll'>
      {[...Categories].map((category, index)=>{
        return(
            <div key={index} className="p-2 rounded-xl min-w-24 text-center cursor-pointer bg-neutral-900 text-neutral-700 font-bold hover:bg-[#4F46E5]/50 hover:text-white">
                <p className="text-sm">{category}</p>
            </div>
        )
      })}
    </div>
  )
}

export default Categories
