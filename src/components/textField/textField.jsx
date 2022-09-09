import PropTypes from 'prop-types';
import clsx from 'classnames/bind';

const classes = clsx.bind({
  root: 'rounded-md font-semibold',
  primary: 'bg-gray-800 border border-gray-600 pl-1 py-1 text-white',
  secondary: 'bg-gray-200 border border-gray-600 pl-1 py-1',
});

function TextField({ variant, ...props }) {
  return <input type="text" className={classes(variant, 'root')} {...props} />;
}

TextField.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
};

TextField.defaultProps = {
  variant: 'primary',
};

export default TextField;
