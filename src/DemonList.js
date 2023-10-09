import Demons from './finaldemonlist2.json'
import { useState } from 'react';
import { Link } from 'react-router-dom'

export default function DemonList() {
    const [demons, setDemons] = useState(Demons)
    return (
        <div className="demon-list">
          <h1>Demon List</h1>
          <div className="search">Search:<input></input></div>
        {demons.map(demon=>
            <div className="demon-snippet" key={demons.indexOf(demon)}>
                <div className="snippet-left">
                    <img class = "demonlist_img"src={ demon.image } alt="" />
                    
                  {/* <img src={ IMAGES.abbadon } alt="" /> */}
                </div>
                <div className="snippet-right">
              <h3>
                <Link className="white" to={`/demon/${demons.indexOf(demon)}`}>{demon.name}</Link>
              </h3>
              <p className="snippet-body">{demon.snippet}</p>
              <span></span>
              <Link class ="more-btn" to={`/demon/${demons.indexOf(demon)}`}>More &#x27A3;</Link>
    
                </div>
            </div>
            )}
        </div>
    )
}
