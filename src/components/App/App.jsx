// IMPORT STYLES
import './App.scss';

// IMPORT COMPONENTS
import PageContent from '../PageContent/PageContent';
import JobList from '../../features/positions/JobList';

// APP CORE COMPONENT
function App() {
  return (
    <div className='app__content'>
      <PageContent>
        <JobList />
      </PageContent>
    </div>
  );
}

export default App;
