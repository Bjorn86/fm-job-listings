// IMPORT PACKAGES
import PropTypes from 'prop-types';
import clsx from 'clsx';

// IMPORT STYLES
import './Card.scss';

// IMPORT COMPONENTS
import Stack from '../Stack/Stack';
import Badge from '../Badge/Badge';

// CARD COMPONENT
function Card({
  company,
  logo,
  new: isNew,
  featured,
  position,
  role,
  level,
  postedAt,
  contract,
  location,
  languages,
  tools,
  addFilter,
}) {
  // OTHER VARIABLES
  const badges = [].concat(role, level, ...languages, ...tools);

  return (
    <li className={clsx('card', { card_type_featured: featured })}>
      <article className='card__wrapper'>
        <div className='card__info-wrapper'>
          <img
            src={process.env.PUBLIC_URL + logo}
            alt={`${company} logotype`}
            className='card__company-logo'
          />
          <div className='card__vacancy-wrapper'>
            <div className='card__company'>
              <h3 className='card__company-name'>{company}</h3>
              {(isNew || featured) && (
                <Stack variant='rounded'>
                  {isNew && (
                    <Badge
                      variant='rounded'
                      colorScheme='primary'
                      text='new!'
                    />
                  )}
                  {featured && (
                    <Badge
                      variant='rounded'
                      colorScheme='dark'
                      text='featured'
                    />
                  )}
                </Stack>
              )}
            </div>
            <div className='card__meta-wrapper'>
              <h2 className='card__position'>{position}</h2>
              <ul className='card__meta-list'>
                <li className='card__meta-item'>
                  <p className='card__meta-text'>{postedAt}</p>
                </li>
                <li className='card__meta-item'>
                  <p className='card__meta-text'>{contract}</p>
                </li>
                <li className='card__meta-item'>
                  <p className='card__meta-text'>{location}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Stack variant='basic'>
          {badges.map((badge) => (
            <Badge
              variant='basic'
              colorScheme='light'
              text={badge}
              key={badge}
              onClick={() => addFilter(badge)}
            />
          ))}
        </Stack>
      </article>
    </li>
  );
}

export default Card;

Card.propTypes = {
  company: PropTypes.string.isRequired,
  logo: PropTypes.string.isRequired,
  new: PropTypes.bool.isRequired,
  featured: PropTypes.bool.isRequired,
  position: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  level: PropTypes.string.isRequired,
  postedAt: PropTypes.string.isRequired,
  contract: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  tools: PropTypes.arrayOf(PropTypes.string).isRequired,
  addFilter: PropTypes.func.isRequired,
};
