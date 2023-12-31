import React from 'react'
import Demons from './finaldemonlist2.json'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAnglesLeft } from '@fortawesome/free-solid-svg-icons'

<FontAwesomeIcon icon="fa-solid fa-arrow-rotate-left" />




export default function Demon() {
  const { id  } = useParams()
  const [demons, setDemons] = useState(Demons)
  console.log(Demons)
  return (
    <>
    <div className="single_demon_wrapper">
    <div className="single_demon_header">
    <Link to={'../'}>

        <div className="back_btn">
        <FontAwesomeIcon icon={faAnglesLeft} />
        </div>
        </Link>

    </div>
    <div className="single_demon_content_wrap">
    <div className="single_demon_content">
      <div className="single_demon_name">
        {demons[id].name}
      </div>
      <div className="single_demon_bottom_content">
      <img src={`/${demons[id].image}`} className="single_demon_img" alt={demons[id].name}/>
      <div className="single_demon_description">
      <div className='single_demon_description_wrap'>

        {/* <div className="descrip_wrap"> */}
          <div className="descrip" ><div dangerouslySetInnerHTML={{__html: demons[id].description}} /></div>
          {/* </div> */}
      </div>
      </div>
      </div>
      
    </div>
    </div>
    </div>

    
    
    
    
   
    </>
  )
}
