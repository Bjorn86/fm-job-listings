// IMPORT STYLES
import './Filter.scss';

// IMPORT COMPONENTS
import Stack from '../../UI/Stack/Stack';

// FILTER COMPONENT
function Filter() {
  return (
    <section className='filter'>
      <Stack variant='removable' />
      <button className='filter__btn-clear' type='button'>
        Clear
      </button>
    </section>
  );
}

export default Filter;
