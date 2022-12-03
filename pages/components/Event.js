import React from 'react'
import Link from 'next/link'

const Event = ({Name, Venue, Description}) => {
  return (
     <div className=' w-[50%] m-auto flex gap-3 mt-2 mb-2'>
     <div className='flex-1 border-2 border-black rounded-xl' >
       <h1 className='text-center mt-2 ' >{Name}</h1> <p className='ml-6'>{Venue} </p>{' '}
       <p className='ml-6'>{Description} </p>{' '}
       <div className='flex'>
         <Link
           href='./Buynow'
           className='flex-start ml-auto mr-auto border-2 border-black rounded-md m-4 w-1/2 text-center'
         >
           Buy Now
         </Link>{' '}
         
       </div>
     </div>
   </div>
  )
}

export default Event
