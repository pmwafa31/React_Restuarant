import React, { useState, useEffect } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import RestuarantCard from './RestuarantCard';
import {restuarantList} from '../actions/maincontentAction'
import { useDispatch, useSelector } from 'react-redux';

function Maincontent() {
    //state to hold data from api call
    // const [restuarants, setRestuarant] = useState([])

    //function to call api
    // const getData = async ()=>{
    //    const result = await fetch('./restaurants.json')
    //     result.json().then((data)=>{
    //         setRestuarant(data.restaurants)
    //     })
    // }

  const dispatch = useDispatch()

//same as ngOnInit
    useEffect(() => {
      // getData()
      dispatch(restuarantList())
    },[])
      
    //access updated state from store
    const {restuarants} = useSelector(state => state.restReducer)
    console.log(restuarants);
  return (
    <div>
        <Row>
          {  restuarants.map(item =>(
                <Col className='d-flex justify-content-center mt-4' sm={6} md={4}>
                <RestuarantCard restuarant={item}/>
            </Col>
            ))}
        </Row>
    </div>
  )
}

export default Maincontent