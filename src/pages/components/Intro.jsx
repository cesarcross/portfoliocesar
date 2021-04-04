import React from 'react';
import styles from '../styles/home.module.scss';

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

const Intro = () => {
  return (
    <>
      <div className={styles.intro}>
        <div>
          <p>Hello! I'm Cesar</p>
          <p>Hello! I am a Full stack developer building cool applications</p>
        </div>
        <img src={code12} alt='' />
      </div>
      <div className={styles.introdescription}>
        <p>ola</p>
      </div>
    </>
  );
};

export default Intro;
