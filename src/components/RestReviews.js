import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Collapse from 'react-bootstrap/Collapse';

function RestReviews({reviews}) {
    const [open, setOpen] = useState(false);
  return (
    <div>
        <Button variant="secondary"
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}>
        View Reviews
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text">
          {
            reviews.map(item=>(
                <div>
                    <h6>{item.name} :  (<span>{item.date}</span>)</h6>
                    <p>Rating : {item.rating}</p>
                    <p>Comments : {item.comments}</p>
                </div>
            ))
          }
        </div>
      </Collapse>
    </div>
  )
}

export default RestReviews