import React from 'react';
import Cover from '../Shared/Cover/Cover';
import DocNameCard from './DocNameCard';
import ProfileTab from './ProfileTab';


const DoctorProfile = () => {
    return (
        <section className='mb-0'>
            <Cover 
            title={'Doctor Profile'} 
            subTitle={'Home/Doctor Profile'}></Cover>
            <DocNameCard></DocNameCard>

            <ProfileTab></ProfileTab>
          
        </section>
    );
};

export default DoctorProfile;