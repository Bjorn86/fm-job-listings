// IMPORT PACKAGES
import { useSelector } from 'react-redux';

// IMPORT STYLES
import './JobList.scss';

// IMPORT COMPONENTS
import Card from '../../UI/Card/Card';

// IMPORT SELECTORS
import { selectAllPositions } from '../../store/positions/positionSelectors';

// JOB LIST COMPONENT
function JobList() {
  // HOOKS
  const positions = useSelector(selectAllPositions);

  return (
    <section className='job-list'>
      <ul className='job-list__list'>
        {positions.map((job) => (
          <Card key={job.id} {...job} />
        ))}
      </ul>
    </section>
  );
}

export default JobList;
