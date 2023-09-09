// IMPORT STYLES
import './App.scss';

// IMPORT COMPONENTS
import Card from '../../UI/Card/Card';

// OTHER IMPORTS
import jobList from '../../assets/data/data.json';

// APP CORE COMPONENT
function App() {
  return (
    <div className='app__content'>
      <ul style={{ width: '1105px' }}>
        {jobList.map((job) => (
          <Card key={job.id} {...job} />
        ))}
      </ul>
    </div>
  );
}

export default App;
