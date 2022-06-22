import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import {Button} from 'react-bootstrap'
import Cards from "./Cards"
import Row from 'react-bootstrap/Row';

function Search() {
 
    const [search, setSearch] = useState('');
    const [input, setInput] = useState('');
    const [repos, setRepos] = useState([]);

   

    // const handleBtnClick = () =>{
    //    console.log(lyrics)
    // }

  useEffect(() => {

    const fetchRepos = async (searchTerm) => {
      try {
        searchTerm ||= 'shoreenb'
        const url = `https://api.github.com/users/${searchTerm}/repos`;
        const { data } = await axios.get(url);
        console.log(data)
        console.log(data.name);
        setRepos(data);
       
      } catch (err) {
        console.log(err)
      }
    }
    fetchRepos(search)
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


        <div className='row-wrapper'>
        <Row>
           {repos.map(repo => (
            <Cards key={repo.id} name={repo.name} />
          ))}  
        </Row>
      </div>
    </>
  
  );
}

export default Search;
