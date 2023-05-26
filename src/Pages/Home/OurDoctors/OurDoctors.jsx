import React from 'react';
import Cover from '../../Shared/Cover/Cover'
import Sectiontitle from '../../Shared/Sectiontitle/Sectiontitle';
import DoctorCard from './DoctorCard';
const OurDoctors = () => {
    return (
        <div>
            <Sectiontitle heading={'Our Expart Doctor'} subHeading={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'}></Sectiontitle>

            <DoctorCard></DoctorCard>
            
        </div>
    );
};

export default OurDoctors;