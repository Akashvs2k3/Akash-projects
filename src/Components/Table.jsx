import React from 'react'
import { useContext } from 'react'
import { newcontext } from '../App'
import { Link } from 'react-router-dom';
import {Table} from 'react-bootstrap'

function Table1() {
    const [data,setData] = useContext(newcontext)
    console.log(data);
  
    return (
    <div>
 <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Place</th>
        </tr>
      </thead>
      <tbody>
    {data.map((item,id)=>
      
        <tr>
          <td>{item.name}</td>
          <td>{item.age}</td>
          <td>{item.place}</td>
          <Link to={`/viewpage/${id}`}>
           <td> <button>View</button></td>
          </Link>
          <Link to={`/editpage/${id}`}>
           <td> <button>Edit</button></td>
          </Link>
          <Link to={`/deletepage/${id}`}>
           <td> <button>Delete</button></td>
          </Link>

        </tr>
      
    )}
      </tbody>
        </table>
    </div>
  )
}

export default Table1