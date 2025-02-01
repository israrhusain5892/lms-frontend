import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './CourseCard.css';
import star from '../../assets/images/star-filled.png';

function CourseCard({course}) {
    return (

    
        
          <div className="carda  rounded p-2 ">
            {/* Image Section */}
            <div className="img">
              <img src={course.image} alt={course.title} className="w-100 rounded" />
            </div>
      
            {/* Card Body */}
            <div className="p-3">
              <h5 className="title">{course.title}</h5>
              <p className="time text-muted">{course.author}</p>
      
              {/* Divider */}
              <div className="mb-2 mt-2" style={{ background: '#E2E8F0', height: '1px' }}></div>
      
              {/* Price & Rating Section */}
              <div className="priceContainer d-flex justify-content-between align-items-center">
                <div className="d-flex justify-content-center gap-1">
                  <span className="price fw-bold">{course.currentPrice}</span>
                  <span className="secondPrice text-decoration-line-through text-muted">{course.price}</span>
                </div>
                <div className="mb-1 d-flex align-items-center">
                  <img src={star} alt="rating" className="me-1" /> 
                  <span className="rating">4.5 (2980)</span>
                </div>
              </div>
      
              {/* Badge Section */}
              <span className="badge text-white px-2 py-1 rounded" 
                style={{ background: `${course.category[0].bg}` }}>
                {course.category[0].name}
              </span>
            </div>
          </div>
    
      
    
      
      //   <Card  className="carda">
      //       <div className='img'>
      //            <img src={course.image}/>
      //       </div>
        
      //   <Card.Body>
      //     <Card.Title className='title'>
      //       {course.title}
      //     </Card.Title>
      //     <p className="time">{course.author}</p>
      //     <div className='mb-2 mt-2' style={{background:' #E2E8F0',height:'1px'}}></div>
      //     <Card.Text className='priceContainer d-flex justify-content-between align-items-center  h-4'>
      //           <div className='d-flex justify-content-center gap-1'>
      //              <span className='price'>{course.currentPrice}</span>
      //              <span className='secondPrice'>{course.price}</span>
      //           </div>
      //           <div className='mb-1'>
      //                <img src={star}/> <span className='rating'>4.5 (2980)</span>
      //           </div>
               
      //     </Card.Text>
      //     <span className="badge " style={{background:`${course.category[0].bg}`}}>{course.category[0].name}</span>
      //   </Card.Body>
      // </Card>
    );
}

export default CourseCard;