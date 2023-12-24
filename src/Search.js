import React from 'react'
import { useState } from 'react';
import Demons from './finaldemonlist2.json'




export default function Search() {

    const [searchPhrase, setSearchPhrase] = useState('')
    const [demons, setDemons] = useState(Demons)

    function search(e){
        let phrase = e.target.value
        setSearchPhrase(phrase)
        console.log('searchPhrase= ', phrase)
        let regex='/'+phrase+'/'
        console.log("regex= ", regex)
        console.log(regex.test(searchPhrase))
      }

    return(
        <div className="search">
            <text>Search:</text>
            <input id="search-input" onClick={search}></input>
        </div>
    )


}