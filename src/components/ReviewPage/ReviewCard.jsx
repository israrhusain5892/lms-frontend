// import moment from 'moment';
// import React from 'react'

// const ReviewCard = ({ review }) => {
//   return (
//     <div style={{ borderBottom: "1px solid #495A6E33", paddingTop: '18px', paddingBottom: '18px' }}>
//       <div className="d-flex justify-content-between align-items-center">
//         <h4 className="fw-bold" style={{ fontSize: "16px" }}>{review.reviewTitle}</h4>
//         <span style={{ color: "#3D5CFF" }}>★<span style={{ color: "#1B2128" }}> {review.rating} star</span></span>
//       </div>
//       <p className="" style={{ color: "#14202E9E", fontSize: "14px" }}>{review.reviewText}</p>
//       <div className="d-flex align-items-center">
//         <img
//           src={review.photo}
//           alt="Alexandria Novak"
//           className="rounded-circle me-3"
//           style={{ width: "16px", height: "16px", objectFit: "cover" }}
//         />
//         <div>
//           <h6 className="mb-0" style={{ fontSize: "14px" }}>{review.name} · {moment(review.date).startOf('day').fromNow()}</h6>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ReviewCard;

import React from 'react';
import { formatDistanceToNow, parseISO } from 'date-fns';
import { AiOutlineLike } from "react-icons/ai";
import './review.css';
import { IoMdArrowDropdown } from "react-icons/io";

const ReviewCard = ({ review,index }) => {
  return (
    <div style={{  paddingTop: '18px', paddingBottom: '18px' }}>
      <div className="d-flex justify-content-between align-items-center">
        {/* <h4 className="fw-bold" style={{ fontSize: "16px" }}>{review.reviewTitle}</h4> */}
        {/* <span style={{ color: "#3D5CFF" }}>★<span style={{ color: "#1B2128" }}> {review.rating} star</span></span> */}
      </div>
      <div className="d-flex align-items-start  gap-2 w-full" >
        <div className='w-[50px] md:w-[40px]' >
        <img
          src={review.photo}
          alt={review.name}
          className="rounded-circle "
          style={{ width: "40px", height: "40px", objectFit: "cover" }}
        />
        </div>
       
        <div className='w-full'>
          <h6 className="mb-0 d-flex gap-2" style={{ fontSize: "14px" }}>
            <span className='username-review'>@{review.name} </span>  <span className='commentDate'>{formatDistanceToNow(parseISO(review.date), { addSuffix: true })}</span>
          </h6>
          <p className="review-text" >{review.reviewText}</p>
          <div className="d-flex align-items-center gap-3 mt-2">
            <button className='d-flex like align-items-center gap-2 py-2'><AiOutlineLike className="text-[ #0F0F0F] fs-5" /> 26k</button><span className='reply-review'>Reply</span>
          </div>
          <button className='mt-1 replies-text d-flex gap-1 align-items-center'><IoMdArrowDropdown className="fs-4" />92 replies</button>
        </div>
       
      </div>
     {
         index==0 && <input className=' outline-none mt-4 py-2 inputComment ' style={{borderBottom: '1px solid #00000080'}} placeholder='reply to @shandj34'/>
     } 



    </div>
  );
};

export default ReviewCard;
