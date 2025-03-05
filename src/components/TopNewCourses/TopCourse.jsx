import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import '../TrendingCourseSection/TrendingCourse.css';
import imga from  '../../assets/images/imagea.png';
import imgb from  '../../assets/images/imageb.png';
import imgc from  '../../assets/images/imagec.png';
import imgd from  '../../assets/images/imaged.png';
import imge from  '../../assets/images/imagee.png';
import { IoIosArrowForward } from "react-icons/io";
import './top.css';


function TopCourse(props) {

    const courses=[
        {
            title:'Advanced Front-End Programming Techniques',
            author:'Julia Anatole · 1 hr',
            image:imga,
            currentPrice:'$12.99',
            price:'$36',
            category:[{name:'Top Author', color:'var(--Blue-Ribbon-950, #141457)', bg:'#E7D5FF'}]
        },

        {
            title:'Ultimate Cybersecurity Fundamental for Beginners',
            author:'Jacob Jones · 3:30 hr',
            image:imgb,
            currentPrice:'$12.99',
            price:'$36',
            category:[{name:"Editor's Choice", color:'var(--Blue-Ribbon-950, #141457)', bg:' #DCFCE7'}]

        },

        {
            title:'Digital User Experience Design Essentials',
            author:'Cody Fisher · 2 hr',
            image:imgc,
            currentPrice:'$12.99',
            price:'$36',
            category:[{name:'Top Author', color:'var(--Blue-Ribbon-950, #141457)', bg:'#E7D5FF'}]
            
        },
        {
            title:'Artificial Intelligence with Python',
            author:'Jenny Wilson · 1:30 hr',
            image:imgd,
            currentPrice:'$12.99',
            price:'$36',
            category:[{name:"Editor's Choice", color:'var(--Blue-Ribbon-950, #141457)', bg:' #DCFCE7'}]
            
        },
        {
            title:'Machine Learning Algorithms in Practice',
            author:'Albert Flores · 1 hr',
            image:imge,
            currentPrice:'$12.99',
            price:'$36',
            category:[{name:"Most Popular", color:'var(--Blue-Ribbon-950, #141457)', bg:' #DCFCE7'}]
        }

    ]
    return (
        <div className='mx-auto courseMain mt-5 mb-5 '>
            <div className='trendingHeading d-flex justify-content-between mb-4 '>
                 <h4 className='top-new'>Top New Courses</h4>
                 <h6 className='d-flex justify-content-center align-items-center gap-1'>All Courses <IoIosArrowForward /> </h6>
                 
            </div>
            <div className='d-flex   course-container mt-4 mb-4'>

                {
                    courses?.map((course,index)=>{
                       return <div className={`card-a card${index}`} key={index}>
                           <CourseCard course={course}/>
                        </div>
                       
                    })
                }
               
              

             
            </div>
           
        </div>
    );
}

export default TopCourse;