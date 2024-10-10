import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ heading, subHeading }) => {
    return (
        <div className='text-center space-y-5'>
            <h2 className='text-2xl md:font-4xl lg:text-6xl font-semibold'>{heading}</h2>
            <p>{subHeading}</p>
        </div>
    );
};

Heading.propTypes = {
    heading: PropTypes.string.isRequired,
    subHeading: PropTypes.string.isRequired
};

export default Heading;