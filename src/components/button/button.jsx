import PropTypes from 'prop-types';
import clsx from 'classnames/bind';

import Spinner from '../spinner';

const classes = clsx.bind({
  root: 'rounded-md font-semibold',
  animated: 'transition-shadow hover:shadow-xl active:opacity-90',
  primary: 'text-slate-300 bg-gray-800 border border-gray-600',
  secondary: 'text-slate-900 bg-gray-300',
  disabled: 'opacity-70',
  sm: 'py-1 px-2',
  md: 'py-2 px-4',
  lg: 'py-3 px-6',
  xl: 'py-4 px-8',
});

function Button({ variant, size = 'md', disabled, className, submit = false, isLoading, children, ...props }) {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      className={classes('root', variant, !disabled && 'animated', size, disabled && 'disabled', className)}
      {...props}
    >
      <div className="w-auto flex items-center gap-2">
        {isLoading && <Spinner size="xs" />}
        {children}
      </div>
    </button>
  );
}

Button.propTypes = {
  variant: PropTypes.oneOf(['primary', 'secondary']),
  size: PropTypes.oneOf(['sm', 'md', 'lg', 'xl']),
  submit: PropTypes.bool,
  isLoading: PropTypes.bool,
  className: PropTypes.string,
  disabled: PropTypes.bool,
};

Button.defaultProps = {
  variant: 'primary',
  size: 'md',
  submit: false,
  isLoading: false,
  disabled: false,
  className: null,
};

export default Button;
