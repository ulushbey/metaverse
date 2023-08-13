import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Banner from './containers/Banner';
import Clients from './containers/Clients';
import Counter from './containers/Counter';
import Feature from './containers/Feature';
import Newsletter from './containers/Newsletter';
import Process from './containers/Process';

function App() {
  return (
    <div>
      {/*============= ScrollToTop Section Starts Here =============*/}
      <div className='preloader'>
        <div className='loader-frame'>
          <div
            className='loader1'
            id='loader1'
          ></div>
          <div className='logo'>
            <img
              src='assets/images/favicon.png'
              alt='logo'
            />
          </div>
          <div className='circle' />
        </div>
      </div>
      <a
        href='#0'
        className='scrollToTop'
      >
        <i className='fas fa-angle-up' />
      </a>
      <div className='overlay' />
      <Navbar />
      <Banner />
      <Counter />
      <Feature />
      <Process />
      <Newsletter />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
