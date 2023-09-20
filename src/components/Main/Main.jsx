// IMPORT PACKAGES
import { Outlet } from 'react-router-dom';

// IMPORT STYLES
import './Main.scss';

// MAIN COMPONENT
function Main() {
  return (
    <main className='main'>
      <Outlet />
    </main>
  );
}

export default Main;
