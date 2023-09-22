// IMPORT PACKAGES
import PropTypes from 'prop-types';

// IMPORT STYLES
import './Stack.scss';

// STACK COMPONENT
function Stack({ children, variant }) {
  return <div className={`stack stack_variant_${variant}`}>{children}</div>;
}

export default Stack;

Stack.propTypes = {
  children: PropTypes.node,
  variant: PropTypes.oneOf(['basic', 'removable', 'rounded']).isRequired,
};

Stack.defaultProps = {
  children: null,
};
