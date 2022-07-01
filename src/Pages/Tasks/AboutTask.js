import React, { useState } from 'react';
import Calender from '../Calender/Calender';

const AboutTask = () => {
    const [date, setDate] = useState(new Date());
    return (
        <div>
            <Calender date={date} setDate={setDate}></Calender>
            <h2>Hello</h2>
        </div>
    );
};

export default AboutTask;