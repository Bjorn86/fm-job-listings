// IMPORT PACKAGES
import { useDispatch } from 'react-redux';
import clsx from 'clsx';

// IMPORT STYLES
import './JobList.scss';

// IMPORT COMPONENTS
import Card from '../../UI/Card/Card';

// IMPORT ACTIONS
import { addFilter } from '../filters/filterSlice';

// IMPORT HOOKS
import { usePositions } from './usePositions';
import { useFetchPositions } from './useFetchPositions';

// JOB LIST COMPONENT
function JobList() {
  // HOOKS
  const dispatch = useDispatch();
  const { positions, currentFilters } = usePositions();
  useFetchPositions();

  // HANDLER FOR ADDING A FILTER
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <section
      className={clsx('job-list', {
        'job-list_no-filters': !currentFilters.length,
      })}
    >
      <ul className='job-list__list'>
        {positions.map((job) => (
          <Card key={job.id} addFilter={handleAddFilter} {...job} />
        ))}
      </ul>
    </section>
  );
}

export default JobList;
