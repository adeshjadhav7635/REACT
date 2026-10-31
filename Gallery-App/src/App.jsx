import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import Title from './components/title'
import Pagination from './components/pagination'
import Imagelist from './components/ImageList'

const App = () => {

  const [userData, setuserData] = useState([])
  const [index, setindex] = useState(1)
 
  

  useEffect(function () {
    getData()
  }, [index])

  const getData = async () => {

    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`)
    setuserData(response.data)

  }
  return (
    <>
    <Title/>
    
      <div className='bg-black text-white min-h-screen p-6  overflow-auto'>

        <div className='flex flex-wrap min-h-[75vh] relative  gap-8 '>
          <Imagelist userData={userData}/>
        </div>
       <Pagination index={index} setindex={setindex} setuserData={setuserData} />
      </div></>
  )


}

export default App