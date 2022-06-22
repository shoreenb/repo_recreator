import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import {Button} from 'react-bootstrap'
import Cards from "./Cards";

function Search() {
    const [lyrics, setLyrics] = useState(["None"])
    const [search, setSearch] = useState('');
    const [input, setInput] = useState('');
   

    // const handleBtnClick = () =>{
    //    console.log(lyrics)
    // }

  useEffect(() => {

    const fetchLyrics = async (searchTerm) => {
      try {
        searchTerm ||= 'shoreenb'
        const url = `https://api.github.com/users/${searchTerm}/repos`;
        const { data } = await axios.get(url);
        console.log(data)
        console.log(data.name);
        setLyrics(data.lyrics);
       
      } catch (err) {
        console.log(err)
      }
    }
    fetchLyrics(search)
  }, [search])

  // nothing => useEffect will run like crazy
  // [] => useEffect will run once
  // [search] => useEffect will run everytime the value changes

  const onFormSubmit = (e) => {
    e.preventDefault()
    setSearch(input)
    setInput('')
  }

  return (
    <>
    <p>{lyrics}</p>
    
     {/* <Button variant="primary" onClick={()=> handleBtnClick()}>Get Lyrics</Button> */}

     <form onSubmit={onFormSubmit}>
          <label htmlFor="input">Search Username </label>
          <input
            type="text"
            id="input"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </form>

        <Cards album="hi" year="1995"/>
    </>
  
  );
}

export default Search;
