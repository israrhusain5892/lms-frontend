import React from 'react';
import CourseCard from '../CourseCard/CourseCard';
import './TrendingCourse.css';
import imga from  '../../assets/imagea.png';
import imgb from  '../../assets/imageb.png';
import imgc from  '../../assets/imagec.png';
import imgd from  '../../assets/imaged.png';
import imge from  '../../assets/imagee.png';
import { IoIosArrowForward } from "react-icons/io";


function TrendingCourse(props) {

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
        <div className='mx-auto w-full courseMain mt-4'>
            <div className='trendingHeading d-flex justify-content-between'>
                 <h4>Trending Courses</h4>
                 <h6>All Courses <IoIosArrowForward /> </h6>
                 
            </div>
            <div className='d-flex   course-container'>

                {
                    courses?.map((course,index)=>{
                       return <div className=''>
                           <CourseCard course={course}/>
                        </div>
                       
                    })
                }
               
              

             
            </div>
           
        </div>
    );
}

export default TrendingCourse;