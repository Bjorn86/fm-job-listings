// IMPORT PACKAGES
import { useSelector, useDispatch } from 'react-redux';

// IMPORT STYLES
import './JobList.scss';

// IMPORT COMPONENTS
import Card from '../../UI/Card/Card';

// IMPORT SELECTORS
import { selectVisiblePositions } from '../../store/positions/positionSelectors';
import { selectFilters } from '../../store/filters/filterSelectors';

// IMPORT ACTIONS
import { addFilter } from '../../store/filters/filterActions';

// JOB LIST COMPONENT
function JobList() {
  // HOOKS
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilters);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters),
  );

  // HANDLER FOR ADDING A FILTER
  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <section className='job-list'>
      <ul className='job-list__list'>
        {positions.map((job) => (
          <Card key={job.id} addFilter={handleAddFilter} {...job} />
        ))}
      </ul>
    </section>
  );
}

export default JobList;
