import PropTypes from "prop-types";
import Header from "../Header";
import Footer from "../Footer";

const PhoneLayout = ({ children }) => {
  
  return (
    <div id="phone" className="max-w-[360px] max-h-[722px] relative">
      <div className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[87%] h-[95%] bg-white rounded-[40px] flex justify-center items-center flex-col overflow-hidden">
        
        <Header />

        <main className="flex-1">{children}</main>

        <Footer />
        
      </div>
    </div>
  );
};

export default PhoneLayout;

PhoneLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
