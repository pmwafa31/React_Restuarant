import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Row, Col, Image, ListGroup  } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import RestReviews from './RestReviews';
import {restuarantList} from '../actions/maincontentAction'
import { useDispatch, useSelector } from 'react-redux';


function ViewDetails() {
    const params = useParams()
    // const [restuarant, setRestuarant] = useState([])

    //function to call api
  //   const getRestuarant = async ()=>{
  //     const result = await fetch('http://localhost:3000/restaurants.json')
  //      result.json().then((data)=>{
  //       setRestuarant(data.restaurants)
  //      })
  //  }

 const dispatch = useDispatch()

   //same as ngOnInit
   useEffect(() => {
    dispatch(restuarantList())
  },[])

  //access updated state from action file
  const {restuarants} = useSelector(state => state.restReducer)

  const rest = restuarants.find(item =>item.id == params.id)

  //for modal
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
    {
      rest ?(
        <Row className='p-5'>
        <Col md={3}>
        <Image className='rounded border' src={rest.photograph} alt='image' fluid></Image>
        </Col>
        <Col md={8}>
        <ListGroup>
        <ListGroup.Item>
          <h2>{rest.name}</h2>
          <p>{rest.neighborhood}</p>
        </ListGroup.Item>
        <ListGroup.Item>Cuisine : {rest.cuisine_type}</ListGroup.Item>
        <ListGroup.Item>Address : {rest.address}</ListGroup.Item>
        <ListGroup.Item>
        <Button variant="secondary" onClick={handleShow}>
        Operating Hours
        </Button>
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View Operating Hours</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <ListGroup>
        <ListGroup.Item>Monday  : {rest.operating_hours.Monday}</ListGroup.Item>
        <ListGroup.Item>Tuesday  : {rest.operating_hours.Tuesday}</ListGroup.Item>
        <ListGroup.Item>Wednesday  : {rest.operating_hours.Wednesday}</ListGroup.Item>
        <ListGroup.Item>Thursday  : {rest.operating_hours.Thursday}</ListGroup.Item>
        <ListGroup.Item>Friday  : {rest.operating_hours.Friday}</ListGroup.Item>
        <ListGroup.Item>Saturday  : {rest.operating_hours.Saturday}</ListGroup.Item>
        <ListGroup.Item>Sunday  : {rest.operating_hours.Sunday}</ListGroup.Item>
        </ListGroup>
        </Modal.Body>
        </Modal>
        </ListGroup.Item>
        <ListGroup.Item><RestReviews reviews = {rest.reviews}/></ListGroup.Item>
        </ListGroup>
        </Col>
      </Row>
      ) : 'Nothing to display'
    }
    </div>
  )
}

export default ViewDetails