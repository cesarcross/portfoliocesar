import Intro from './components/Intro';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';

import styles from './styles/home.module.scss';

function HomePage() {
  return (
    <div className={styles.container}>
      <Intro />
      <Portfolio />
      <Contact />
    </div>
  );
}

export default HomePage;
