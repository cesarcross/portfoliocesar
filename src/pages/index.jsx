import { Contact, Container, Intro, Projects } from './index.style';
import Link from 'next/link';

// import astrobay from '../assets/images/astrobay.png';

import astrobay from '../assets/images/astrobay.png';

function HomePage() {
  return (
    <Container>
      <div>Welcome to Next.js!</div>
      <Intro>
        <p>Cesar</p>
        <p>Corregiari</p>
      </Intro>
      <Projects>
        <a href='https://www.astrobay.vercel.app' target='blank'>
          <p>CLIQUE AQUI</p>
        </a>
        <Link href='https://www.astrobay.vercel.app' passHref={true}>
          <a target='blank'>
            <img src={astrobay} alt='' />
            <p>CLIQUE AQUI</p>
          </a>
        </Link>
      </Projects>
      <Contact>
        <p>Entre em contato!</p>
      </Contact>
    </Container>
  );
}

export default HomePage;
