import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <div className='p-5 text-center'>
            <h2>copyright @ {year} by Noisa Akter</h2>
        </div>
    );
};

export default Footer;