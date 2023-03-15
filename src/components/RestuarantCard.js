import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom'
function RestuarantCard({restuarant}) {
  return (
    <div>
    <Link to={'/view_restuarant/'+restuarant.id} style={{textDecoration:'none'}}>
    <Card style={{ width: '18rem', height:'100%'}}>
      <Card.Img variant="top" src={restuarant.photograph} style={{padding:'10px',height:'300px', borderRadius:'20px'}}/>
      <Card.Body>
        <Card.Title>{restuarant.name}</Card.Title>
        <Card.Text>
          <span>Cuisine &nbsp;&nbsp;:-{restuarant.cuisine_type}</span><br></br>
          <span>{restuarant.neighborhood}</span>
        </Card.Text>
      </Card.Body>
    </Card>
    </Link>
    </div>
  )
}

export default RestuarantCard