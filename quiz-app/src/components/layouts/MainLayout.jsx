import '../../assets/styles/mainLayout.css'
import Footer from './Footer';
import Header from './Header';

import PropTypes from 'prop-types';

const MainLayout = ({ page, children }) => {
    return (
      <>
        <Header page={page} />
        {children}
        <Footer />
      </>
    );
  }
export default MainLayout


MainLayout.propTypes = {
    page: PropTypes.string,
    children: PropTypes.node
}