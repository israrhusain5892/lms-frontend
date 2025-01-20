import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseCard.css';
import star from '../../assets/images/star-filled.png';

function CourseCard({course}) {
    return (
        <Card  className="carda">
            <div className='img'>
                 <img src={course.image}/>
            </div>
        
        <Card.Body>
          <Card.Title className='title'>
            {course.title}
          </Card.Title>
          <p className="time">{course.author}</p>
          <div className='mb-2 mt-2' style={{background:' #E2E8F0',height:'1px'}}></div>
          <Card.Text className='priceContainer d-flex justify-content-between align-items-center  h-4'>
                <div className='d-flex justify-content-center gap-1'>
                   <span className='price'>{course.currentPrice}</span>
                   <span className='secondPrice'>{course.price}</span>
                </div>
                <div className='mb-1'>
                     <img src={star}/> <span className='rating'>4.5 (2980)</span>
                </div>
               
          </Card.Text>
          <span className="badge " style={{background:`${course.category[0].bg}`}}>{course.category[0].name}</span>
        </Card.Body>
      </Card>
    );
}

export default CourseCard;