import React from 'react'
import { useContext } from 'react'
import { newcontext } from '../App'
import { useParams } from 'react-router-dom'

function ViewPage() {
    const [data,setData]=useContext(newcontext)

    const {user} =useParams()

    const viewdata=data[user]
  return (
    <div>
<h1>{viewdata.name}</h1>
<h2>{viewdata.age}</h2>
<h1>{viewdata.place}</h1>
    </div>
  )
}

export default ViewPage