import React from 'react'
import { Link } from 'react-router-dom'
import image from '../Images/img2.jpg'
export default function Cards() {
  return (
    <div>
      <div className="card mt-3" style={{"width": "18rem", "maxHeight":"360px"}}>
        <img src={image} className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">some text.</p>
            <div className='container w-100'>
              <select className='m-2 h-100  bg-success rounded'>
                {
                  Array.from(Array(6),(e,i)=>{
                     return(
                      <option key={i+1} value={i+1}>{i+1}</option>
                     )
                  })
                }
              </select>
              <select  className='m-2 h-100  bg-success rounded'>
               <option value="Half">Half</option>
               <option value="Half">full</option>
              </select>
              <div className='d-inline fs-5 h-100 m-2'>Price</div>
            </div>
          </div>
      </div>
    </div>
  )
}
