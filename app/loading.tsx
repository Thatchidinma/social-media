import LoadingIcon from '@/components/icons/LoadingIcon'
import React from 'react'

const loading = () => {
  return (
    <div className='w-full flex justify-center items-center h-[calc(100vh_-_91px)]'>
      <LoadingIcon className='m-auto' />
    </div>
  )
}

export default loading
