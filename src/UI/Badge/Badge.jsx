// IMPORT PACKAGES
import PropTypes from 'prop-types';

// IMPORT STYLES
import './Badge.scss';

// BADGE COMPONENT
function Badge({ variant, colorScheme, text, onClear, onClick }) {
  return variant === 'basic' ? (
    <button className='badge badge_type_button' type='button' onClick={onClick}>
      {text}
    </button>
  ) : (
    <div className='badge badge_type_div'>
      <span
        className={`badge__tag badge__tag_variant_${variant} badge__tag_color-scheme_${colorScheme}`}
      >
        {text}
      </span>
      {variant === 'removable' && (
        <button
          className='badge__remove-btn'
          type='button'
          aria-label='Delete'
          onClick={onClear}
        />
      )}
    </div>
  );
}

export default Badge;

Badge.propTypes = {
  variant: PropTypes.oneOf(['basic', 'removable', 'rounded']).isRequired,
  colorScheme: PropTypes.oneOf(['light', 'primary', 'dark']).isRequired,
  text: PropTypes.string.isRequired,
  onClear: PropTypes.func,
  onClick: PropTypes.func,
};

Badge.defaultProps = {
  onClear: () => {},
  onClick: () => {},
};
