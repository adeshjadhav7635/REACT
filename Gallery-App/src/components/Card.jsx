import React from 'react'

const Card = (props) => {
  return (
    <div >
        <a href={props.elem.url} target='_blank'>
                  <div className='h-50 w-48 mb-2'>
                    <img className='h-full object-cover w-full  overflow-hidden' src={props.elem.download_url} alt="" />
                  </div>
                  <h2 >{props.elem.author}</h2>
                </a>
    </div>
  )
}

export default Card