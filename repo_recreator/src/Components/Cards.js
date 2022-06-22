import {Card,Button} from 'react-bootstrap'
import React, {useState} from  'react';
const Cards = ({name}) => {  
     
    const handleInfoBtn = () =>{
    
    }
 
    return(
        <>
            <Card style={{ width: '18rem' }}>
                
                <Card.Body>
                    <Card.Title>Repo : {name}</Card.Title>
                 
                     <p></p>     
                </Card.Body>
                <Button variant="primary" onClick={()=> handleInfoBtn()}>More Info</Button>
            </Card>
         
</>
    );
 }
 export default Cards;
