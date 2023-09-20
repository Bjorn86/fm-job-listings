// IMPORT PACKAGES
import PropTypes from 'prop-types';

// IMPORT STYLES
import Card from '../../UI/Card/Card';
import './JobList.scss';

// JOB LIST COMPONENT
function JobList({ data }) {
  return (
    <section className='job-list'>
      <ul className='job-list__list'>
        {data.map((job) => (
          <Card key={job.id} {...job} />
        ))}
      </ul>
    </section>
  );
}

export default JobList;

JobList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};
