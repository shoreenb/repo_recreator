import React, { useEffect, useState } from 'react';
import axios from 'axios';


function Search() {
  const [students, setStudents] = useState([]);
  const [cohort, setCohort] = useState('');
  const [search, setSearch] = useState('');
  const [error, setError] = useState('');
  const [statusMessage, setStatusMessage] = useState('Loading');



  useEffect(() => {

    const fetchStudents = async (searchTerm) => {
      searchTerm ||= 'shoreenb'
      try {
        const url = `https://api.github.com/users/${searchTerm}/repos` 

        // const { data: { students } } = await axios.get(url)
        const { data } = await axios.get(url)
        console.log('I was mounted')
        setStudents(data.students)
        setStatusMessage('')
        setError('')
      } catch (err) {
        setError(err)
        setStatusMessage('Loading...')
      }
    }
    const timeoutId = setTimeout(() => {
      fetchStudents(search)
    }, 400);

    return () => {
      clearTimeout(timeoutId)
    }

  }, [search])

  // nothing => useEffect will run like crazy
  // [] => useEffect will run once
  // [search] => useEffect will run everytime the value changes

  console.log(cohort)
  const renderedStudents = students.map(st => {
    return (
      <li key={st.github}>{st.name}</li>
    )
  })

  const onInputChange = (e) => {
    setCohort(e.target.value)
  }

  const onFormSubmit = (e) => {
    e.preventDefault()
    setSearch(cohort)
    setCohort('')
  }

  return (
    <div className="App">
      <header className="App-header">
        {error
          ? <h1>Sorry, we could not find a(n) {search} cohort</h1>
          : <div>
            <h3> {statusMessage ? statusMessage : ''} </h3>
            <ul> {renderedStudents} </ul>
          </div>
        }

        <form onSubmit={onFormSubmit}>
          <label htmlFor="cohort">Cohort</label>
          <input
            type="text"
            id="cohort"
            value={cohort}
            onChange={onInputChange}
          />
        </form>
      </header>
    </div>
  );
}

export default Search;
