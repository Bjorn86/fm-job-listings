// IMPORT PACKAGES
import PropTypes from 'prop-types';

// IMPORT STYLES
import './PageContent.scss';

// IMPORT COMPONENTS
import Header from '../Header/Header';
import Filter from '../Filter/Filter';

// APP LAYOUT COMPONENT
function PageContent({ children }) {
  return (
    <>
      <Header />
      <main className='page-content'>
        <Filter />
        {children}
      </main>
    </>
  );
}

export default PageContent;

PageContent.propTypes = {
  children: PropTypes.node,
};

PageContent.defaultProps = {
  children: null,
};
