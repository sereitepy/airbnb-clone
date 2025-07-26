import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div className='bg-white max-w-fit mx-auto rounded-full border-1 border-gray-300 shadow-lg'>
      <div className='flex flex-row gap-1 items-center justify-center'>
        <div className='flex flex-col justify-baseline bg-white rounded-full text-wrap px-20 py-3 hover:bg-gray-100 text-sm cursor-pointer'>
          <div className='font-semibold'>Where</div>
          <div className='text-gray-500'>Search Destinations</div>
        </div>
        <span className='text-gray-300'>|</span>
        <div className='bg-white rounded-full text-wrap px-10 py-3 hover:bg-gray-100 text-sm cursor-pointer'>
          <div className='font-semibold'>Check In</div>
          <div className='text-gray-500'>Add Dates</div>
        </div>
        <span className='text-gray-300'>|</span>

        <div className='bg-white rounded-full text-wrap px-10 py-3 hover:bg-gray-100 text-sm cursor-pointer'>
          <div className='font-semibold'>Check Out</div>
          <div className='text-gray-500'>Add Dates</div>
        </div>
        <span className='text-gray-300'>|</span>

        <div className='flex flex-row items-center justify-between gap-10 bg-white rounded-full  text-wrap px-20 py-3 hover:bg-gray-100 cursor-pointer'>
          <div className='text-sm'>
            <div className='font-semibold'>Who</div>
            <div className='text-gray-500'>Add Guests</div>
          </div>
          <div className='p-2.5 bg-red-500 rounded-full'>
            <Search className='w-5 h-5 font-bold text-white' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
