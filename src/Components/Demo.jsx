import React from 'react'
import { useContext } from 'react'
import { newcontext } from '../App'


function Demo() {
    const [data,setData]=useContext(newcontext)
  return (
    <div>
        {data.map((e)=>
        <h1>
            {e.name}
            {e.age}
            {e.place}
        </h1>
        )}
    </div>
  )
}

export default Demo