import {Card,Button} from 'react-bootstrap'
import React, {useState} from  'react';

const Cards = ({album,year}) => {  
     
 
    return(
        <>
            <Card style={{ width: '18rem' }}>
                <Card.Body>
                    <Card.Title>{album}</Card.Title>
                    <Card.Text>{year}
                    </Card.Text>  
                     <p></p>     
                </Card.Body>
            </Card>
         
</>
    );
 }

 export default Cards;
