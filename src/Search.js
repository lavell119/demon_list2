import React from 'react'
import { useState } from 'react';



export default function Search() {

    const [searchPhrase, setSearchPhrase] = useState('')


    function search(e){
        let phrase = e.target.value
        setSearchPhrase(phrase)
        console.log('searchPhrase= ', phrase)
        let regex='/'+phrase+'/'
        console.log("regex= ", regex)
      }

    return(
        <div className="search">
            <text>Search:</text>
            <input id="search-input"></input>
        </div>
    )


}