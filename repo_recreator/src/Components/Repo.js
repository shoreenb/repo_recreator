import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const Repo = () => {
  const displayRepo = useSelector(state => {
    console.log({state})
    return state.repoReducer.displayRepo
  });

  const dispatch = useDispatch()
  const handleRep = () => {
    dispatch({type: ""})
  }
  return (
    <>
    
    
    </>
  )
}

export default Repo
