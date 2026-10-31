import React from 'react'
import Card from './Card'

const Imagelist = ({userData}) => {
    let printUserData= <h3 className='text-gray-500 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'></h3>
    if(userData.length>0){

       printUserData = userData.map(function(elem,idx){
            return <div key={idx}>
                <Card elem={elem} />
                </div>
        })

    }

  return (
    <div className='flex flex-wrap min-h-[75vh] relative gap-8'>
                {printUserData}
            </div>
  )
}

export default Imagelist