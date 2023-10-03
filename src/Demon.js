import React from 'react'
import Demons from './finaldemonlist2.json'
import { useState } from 'react'

export default function Demon() {
  const [demons, setDemons] = useState(Demons)
  console.log(Demons)
  const  id   = 3
  return (
    <>
    <div className="single_demon_header">
      
        <div className="back_btn">Back</div>
      
    </div>
    <div className="single_demon_content">{demons[id].name}</div>
    </>
  )
}
