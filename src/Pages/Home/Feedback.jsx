import React, { useEffect, useState } from 'react';
import Sectiontitle from '../Shared/Sectiontitle/Sectiontitle';

import FeedbackSlide from './FeedbackSlide';


const Feedback = () => {
    // const [review] = useReview()
    return (
        <section>
            <Sectiontitle heading={'What Our Patients Says'} subHeading={'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inve ntore veritatis et quasi architecto beatae vitae dicta sunt explicabo.'}></Sectiontitle>
            <div className='mt-10'>
             <FeedbackSlide></FeedbackSlide>

            </div>
        </section>
    );
};

export default Feedback;