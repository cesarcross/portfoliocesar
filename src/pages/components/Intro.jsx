import React from 'react';
import Link from 'next/link';
import styles from '../styles/intro.module.scss';

import code11 from '../../assets/images/code11.png';
import code66 from '../../assets/images/code66.jpg';

const Intro = () => {
  return (
    <>
      <div className={styles.intro}>
        <div>
          <p>
            Hello! I'm<span> Cesar</span>
          </p>
          <p>I am a Web Developer building cool websites and apps.</p>
        </div>
        <img src={code11} alt='' />
        <Link href='#contact'>
          <button>CONTACT</button>
        </Link>
      </div>
      <div className={styles.services}>
        <img src={code66} alt='' />

        <div>
          <h2>Services</h2>

          <ul>
            <li>Web development</li>
            <li>Responsive design</li>
            <li>Mobile applications</li>
            <li>Performatic websites</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Intro;
