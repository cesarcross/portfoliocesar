import React from 'react';
import Link from 'next/link';

import astrobay from '../../assets/images/astrobay.png';
import codecaravan from '../../assets/images/codecaravan.png';
import biohazard from '../../assets/images/biohazard.png';
import uva from '../../assets/images/uva.png';
// import quitanda from '../../assets/images/quitanda.png';
import gamestube from '../../assets/images/gamestube.png';

import styles from '../styles/portfolio.module.scss';

const Portfolio = () => {
  return (
    <div className={styles.homeprojects}>
      <h2>Featured Projects</h2>
      <div className={styles.projectscontainer}>
        <div className={styles.projectstyle}>
          <h3>Astrobay</h3>
          <p>Ecommerce</p>
          <a href='https://astrobay.vercel.app' target='_blank'>
            <img src={astrobay} alt='' />
          </a>
        </div>

        <div className={styles.projectstyle}>
          <h3>Uva</h3>
          <p>Restaurant</p>
          <a href='https://restauranteuva.now.sh/' target='_blank'>
            <img src={uva} alt='' />
          </a>
        </div>
        <div className={styles.projectstyle}>
          <h3>Code Caravan</h3>
          <p>Agency</p>
          <a href='https://www.codecaravan.com.br/' target='_blank'>
            <img src={codecaravan} alt='' />
          </a>
        </div>
        <div className={styles.projectstyle}>
          <h3>Biohazard Match</h3>
          <p>Game</p>
          <a href='https://biohazardgame.netlify.app/' target='_blank'>
            <img src={biohazard} alt='' />
          </a>
        </div>

        {/* <div className={styles.projectstyle}>
          <h3>Quitanda Veggie</h3>
          <p>Restaurant</p>
          <a href='https://quitandavegana.now.sh/' target='_blank'>
            <img src={quitanda} alt='' />
          </a>
        </div> */}

        <div className={styles.projectstyle}>
          <h3>Games Tube</h3>
          <p>Video website</p>
          <a href='https://gamesblog.vercel.app/' target='_blank'>
            <img src={gamestube} alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
