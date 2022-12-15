import React from 'react'
import Article from './Article'

const Articles = () => {
  return (
    <div className='my-4'>
        <h2 className='font-bold text-[24px]'>FEATURED ARTICLES</h2>
        <div className='flex flex-wrap items-center justify-between'>
            <Article />
            <Article />
            <Article />
            <Article />
        </div>
    </div>
  )
}

export default Articles