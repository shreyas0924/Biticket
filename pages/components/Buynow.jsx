import Image from 'next/image'

const Buynow = () => {
  return (
    <div className='container flex gap-3 ml-auto mr-auto'>
      <div className='flex-col'>
        <Image
          src='/silver.png'
          width={400}
          height={400}
          className='mt-8 mr-auto ml-auto  border-2 border-black rounded-[20px]'
        ></Image>
        <button className='text-bold border-2 text-center justify-center w-[80%] rounded-[25px] mt-3 ml-9 border-black'>
          Buy
        </button>
      </div>
      <div>
        <Image
          src='/gold.png'
          width={400}
          height={400}
          className='mt-8  ml-auto  border-2 border-black rounded-[20px]'
        ></Image>
        <button className='text-bold border-2 text-center justify-center w-[80%] rounded-[25px] mt-3 ml-9 border-black'>
          Buy
        </button>
      </div>
      <div className='flex-col'>
        <Image
          src='/diamond.png'
          width={400}
          height={400}
          className='mt-8  ml-auto  border-2 border-black rounded-[20px]'
        ></Image>
        <button className='text-bold border-2 text-center justify-center w-[80%] rounded-[25px] mt-3 ml-9 border-black'>
          Buy
        </button>
      </div>
    </div>
  )
}

export default Buynow
