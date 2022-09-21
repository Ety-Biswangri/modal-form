import React from 'react';

const Name = ({ name }) => {
    return (
        <div className='mt-5'>
            <h4 className='text-center'>Your name is: <span className='fw-bold'>{name}</span></h4>
        </div>
    );
};

export default Name;