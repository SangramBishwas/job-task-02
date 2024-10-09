import PropTypes from 'prop-types';

const Button = ({ text }) => {
    return (
        <button className='bg-[#FD6F00] rounded-md text-white py-3 px-4'>
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired
};

export default Button;