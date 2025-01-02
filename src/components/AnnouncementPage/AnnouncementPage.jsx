import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import Announcements from './Announcements';
import './AnnouncementPage.css';
import JohnImage from '../../assets/images/John.svg';
import PatriciaImage from '../../assets/images/Patricia.svg'
import SamanthaImage from '../../assets/images/Samantha.svg'


const announcementsData = [

    {
        id: 1,
        name: "Samantha Payne",
        username: "@Sam.Payne90",
        date: "Posted on Oct 05 20:00",
        message: `Hello Students,
        The data structures and algorithms lectures for today have been cancelled. We will catch up next week. Until then, I request you to read the material I have posted.
         Have a good week!`,
        image: SamanthaImage,
        rating: 4.5,
    },
    {
        id: 2,
        name: "Patricia Sanders",
        username: "@Patricia.Sanders",
        date: "Posted on Oct 05 20:00",
        message: `Dear Students,
        Today's lectures on data structures and algorithms are cancelled. We'll resume next week. Please review the uploaded materials in the meantime. 
        Have a great week!`,
        image: PatriciaImage,
        rating: 4.5,
    },
    {
        id: 3,
        name: "John Dukes",
        username: "@John.Dukes",
        date: "Posted on Oct 05 20:00",
        message: `Dear Students,
        I wanted to inform you that today's lectures on data structures and algorithms have been cancelled. We will resume our discussions next week. In the meantime, please take some time to review the materials I have uploaded.
        Wishing you all a wonderful week ahead!`,
        image: JohnImage,
        rating: 4.5,
    },
];



const AnnouncementPage = () => {
    return (
        <>
            <Breadcrumb className="custom-breadcrumb" style={{ marginTop: '44px' }}>
                <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
                <Breadcrumb.Item active>Announcements</Breadcrumb.Item>
            </Breadcrumb>

            <div style={{ marginTop: '36px', marginleft: "30px" }}>
                {announcementsData.map((announcement) => (
                    <Announcements key={announcement.id} announcement={announcement} />
                ))}
            </div>
        </>
    );
};

export default AnnouncementPage;









