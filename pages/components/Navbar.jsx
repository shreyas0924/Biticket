import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex gap-3 border-2 border-white rounded-xl m-auto w-[70%] mt-5 text-xl shadow-md shadow-slate-600 bg-slate-200 '>
      <Link href='/' className='justify-start m-5 ml-[3%]'>
        {' '}
        Blockchain Ticketing
      </Link>
      <div className='flex gap-6 m-5 ml-auto'>
        <Link href='/' className=''>
          Home
        </Link>
        <Link href='../components/Events' className=''>
          Events
        </Link>
        <Link href='../components/Dashboard' className=' '>
          Dashboard
        </Link>
      </div>
    </div>
  )
}

export default Navbar
