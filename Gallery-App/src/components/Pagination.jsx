import React from 'react'

const Pagination = ({index,setindex,setuserData}) => {
  return (
     <div className='flex justify-center gap-2 p-4'>
          <button className='bg-amber-400 px-4 cursor-pointer active:scale-90 py-2 font-semibold rounded text-black ' onClick={() => {
            if (index > 1) {
              setindex(index - 1)
              setuserData([])
            }
          }}>prev</button>
          <h3 className=' p-2 text-gray-400 font-semibold'>page {index}</h3>
          <button className='bg-amber-400 px-4 cursor-pointer active:scale-90 py-2 font-semibold rounded text-black ' onClick={() => {
            setindex(index + 1)
            setuserData([])
          }}>next</button>
        </div>
  )
}

export default Pagination