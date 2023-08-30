import React from 'react';
import Teamcard from '../Teamcard/Teamcard';
import img from '../../assets/doctor1.jpg'

const Team = () => {
    return (
        <div className='flex flex-col justify-center items-center mt-20 px-10'>
            <div>
                <p className="text-center text-blue-600 text-lg">Our Team</p>
                <h1 className="text-4xl text-black font-bold text-center">Meet Our Experiences Doctors For Rest Treatment</h1>
            </div>

            <div className='grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 mt-10'>
                <Teamcard name={"Black Marvin"} degination={'Medical Assistant'} img={img} />
                <Teamcard name={"Black Marvin"} degination={'Medical Assistant'} img={img} />
                <Teamcard name={"Black Marvin"} degination={'Medical Assistant'} img={img} />
                <Teamcard name={"Black Marvin"} degination={'Medical Assistant'} img={img} />
            </div>
        </div>
    );
};

export default Team;