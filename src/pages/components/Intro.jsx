import React from 'react';
import Link from 'next/link';
import styles from '../styles/intro.module.scss';

import code1 from '../../assets/images/code1.png';
import code2 from '../../assets/images/code2.png';
import code3 from '../../assets/images/code3.png';
import code4 from '../../assets/images/code4.png';
import code5 from '../../assets/images/code5.jpg';
import code6 from '../../assets/images/code6.jpg';
import code7 from '../../assets/images/code7.jpg';
import code8 from '../../assets/images/code8.jpg';
import code9 from '../../assets/images/code9.png';
import code10 from '../../assets/images/code10.png';
import code11 from '../../assets/images/code11.png';
import code12 from '../../assets/images/code12.png';
import responsive from '../../assets/images/responsive.png';
import code66 from '../../assets/images/code66.jpg';

const Intro = () => {
  return (
    <>
      <div className={styles.intro}>
        <div>
          <p>
            Hello! I'm<span> Cesar</span>
          </p>
          <p>I am a Fullstack developer building cool websites and apps.</p>
        </div>
        <img src={code11} alt='' />
        <Link href='#contact'>
          <button>CONTACT</button>
        </Link>
      </div>
      <div className={styles.introdescription}>
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
