// IMPORT PACKAGES
import { useSelector, useDispatch } from 'react-redux';

// IMPORT STYLES
import './Filter.scss';

// IMPORT COMPONENTS
import Stack from '../../UI/Stack/Stack';
import Badge from '../../UI/Badge/Badge';

// IMPORT SELECTORS
import { selectFilters } from './filterSelectors';

// IMPORT ACTIONS
import { removeFilter, clearFilters } from './filterSlice';

// FILTER COMPONENT
function Filter() {
  // HOOKS
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);

  if (!currentFilters.length) {
    return null;
  }

  return (
    <section className='filter'>
      <Stack variant='removable'>
        {currentFilters.map((filter) => (
          <Badge
            key={filter}
            variant='removable'
            colorScheme='light'
            text={filter}
            onClear={() => dispatch(removeFilter(filter))}
          />
        ))}
      </Stack>
      <button
        className='filter__btn-clear'
        type='button'
        onClick={() => dispatch(clearFilters())}
      >
        Clear
      </button>
    </section>
  );
}

export default Filter;
