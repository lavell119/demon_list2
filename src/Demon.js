import React from 'react'
import Demons from './finaldemonlist2.json'
import { useState } from 'react'

export default function Demon() {
  const [demons, setDemons] = useState(Demons)
  console.log(Demons)
  const  id   = 3
  return (
    <>
    <div className="single_demon_wrapper">
    <div className="single_demon_header">
      
        <div className="back_btn">Back</div>
      
    </div>
    <div className="single_demon_content">
      <div className="single_demon_name">
        {demons[id].name}
      </div>
      <img src={`/${demons[id].image}`} className="demon-img" alt={demons[id].name}/>
     
    </div>
    <div className="single_demon_description">
    
    </div>
    </div>
    
   
    </>
  )
}
