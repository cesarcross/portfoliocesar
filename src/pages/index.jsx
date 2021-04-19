import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styles from './styles/home.module.scss';

function HomePage() {
  return (
    <div className={styles.container}>
      <Intro />
      <Portfolio />
      <ToastContainer style={{ fontSize: '1.5rem' }} />
      <Contact />
    </div>
  );
}

export default HomePage;
