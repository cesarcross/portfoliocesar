import Link from 'next/link';

import styles from './styles/home.module.css';

import astrobay from '../assets/images/astrobay.png';

function HomePage() {
  return (
    <div className={styles.homecontainer}>
      <div>Welcome to Next.js!</div>
      <div className='homeintro'>
        <p>Cesar</p>
        <p>Corregiari</p>
      </div>
      <div className='homeprojects'>
        <a href='https://www.astrobay.vercel.app' target='blank'>
          <p>CLIQUE AQUI</p>
        </a>
        <Link href='https://www.astrobay.vercel.app' passHref={true}>
          <a target='blank'>
            <img src={astrobay} alt='' />
            <p>CLIQUE AQUI</p>
          </a>
        </Link>
      </div>
      <div className='homecontact'>
        <p>Entre em contato!</p>
      </div>
    </div>
  );
}

export default HomePage;
