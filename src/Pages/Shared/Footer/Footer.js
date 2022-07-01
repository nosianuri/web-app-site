import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='p-5 text-center text-black bg-white'>
            <div>
<h2>WebTaskApp</h2>
            </div>
            <div className='p-5 '>
            <h2>copyright @ {year} by Noisa Akter</h2>
        </div>
        </div>
    );
};

export default Footer;