import React from 'react'

const ChildComponent = (props: any) => {
    console.log(props)
  return (
    <div className='flex items-center justify-center min-h-screen bg-yellow-900'> 
    <div className='bg-purple-400 p-10 text-white w-full text-center'> 
    <h1 className='text-6xl font-bold'>{props.name}</h1>
    <h2 className='text-3xl font-bold'>{props.universityName}</h2>
    <h2 className='text-3xl font-bold'>{props.department}</h2>
    <h2 className='text-3xl font-bold'>{props.profession}</h2>
    <h2 className='text-3xl font-bold'>{props.age}</h2>





    </div>
    </div>
  )
}

export default ChildComponent