import React, { useState } from 'react'

const App = () => {
  const [task, settask] = useState([]);
  const [heading, setheading] = useState('');
  const [details, setdetails] = useState('');

  function submitHandler(e) {
    e.preventDefault()
    const copyTask = [...task];
    copyTask.push({ heading, details })
    settask(copyTask);

    setdetails('')
    setheading('')
  }

  function deleteNote(index){
    const copyTask=[...task]
    copyTask.splice(index,1)
    settask(copyTask)
    
  }

  return (
    <div className=' lg:h-screen text-xl lg:flex bg-black text-white  '>
      <form onSubmit={(e) => { submitHandler(e) }} className=' flex lg:w-1/2 flex-col items-start gap-5 p-10' >
        <h1 className='text-3xl font-bold'>Add Notes</h1>
        <input
          type="text"
          value={heading}
          placeholder='Enter Notes Heading'
          className='border-2 px-5 py-2 w-full '
          onChange={(e) => {
            setheading(e.target.value)
          }}

        />
        <textarea type='text'
          placeholder='Enter Details'
          value={details}
          className='border-2 px-5 py-2 h-35 w-full outline-none'
          onChange={(e) => {
            setdetails(e.target.value)

          }}
        />
        <button className='border-1 w-full bg-white text-black rounded-xl p-1.5 ' type="submit">Add Note</button>

      </form>
      <div className=' p-10 lg:w-1/2 h-full border-l-2'>
        <h1 className='font-bold text-3xl'>Your Notes</h1>
        <div className=" flex flex-wrap gap-5 mt-4 h-full justify-start">
          {task.map(function (elem,idx) {
            return <div key={idx} className=" flex flex-col justify-between items-start  bg-cover text-black px-4 py-5 h-52 w-42 bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT84Ur6WVRu98SYEl_CTSLHgXdsA0udZpQepymXTxR4Q&s=10')] rounded-2xl">
              <div>
              <h3 className='font-bold text-3xl'>{elem.heading}</h3>
              <p className='mt-2 overflow-hidden leading-tight text-sm'>{elem.details}</p>
              </div>
              <button onClick={()=>{deleteNote(idx)}} className='items-baseline bg-red-500 w-full rounded cursor-pointer active:scale-96'>Delete</button>
          </div>
          })}
          



        </div>

      </div>
    </div>
  )
}

export default App