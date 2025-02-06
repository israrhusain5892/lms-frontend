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

const ReviewCard = ({ review }) => {
  return (
    <div style={{ borderBottom: "1px solid #495A6E33", paddingTop: '18px', paddingBottom: '18px' }}>
      <div className="d-flex justify-content-between align-items-center">
        <h4 className="fw-bold" style={{ fontSize: "16px" }}>{review.reviewTitle}</h4>
        <span style={{ color: "#3D5CFF" }}>★<span style={{ color: "#1B2128" }}> {review.rating} star</span></span>
      </div>
      <p className="" style={{ color: "#14202E9E", fontSize: "14px" }}>{review.reviewText}</p>
      <div className="d-flex align-items-center">
        <img
          src={review.photo}
          alt={review.name}
          className="rounded-circle me-3"
          style={{ width: "16px", height: "16px", objectFit: "cover" }}
        />
        <div>
          <h6 className="mb-0" style={{ fontSize: "14px" }}>
            {review.name} · {formatDistanceToNow(parseISO(review.date), { addSuffix: true })}
          </h6>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
