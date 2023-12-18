import Demons from './finaldemonlist2.json'
import { Link } from 'react-router-dom'
import Search from './Search'
import { useState } from 'react';



export default function DemonList() {
    const [searchPhrase, setSearchPhrase] = useState('')
    const [demons, setDemons] = useState(Demons)
    
    
    return (
        <div className="demon-list">
          <h1>Demon List</h1>
          <Search setDemons= {setDemons}/>
          {/* <div className="search">{searchPhrase}<input onChange={search}></input></div> */}
        {demons.map(demon=>
            <div className="demon-snippet" key={demons.indexOf(demon)}>
                <div className="snippet-content">

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
            </div>
            )}
        </div>
    )
}
