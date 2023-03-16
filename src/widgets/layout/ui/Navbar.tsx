import React from 'react';
import Logo from './Logo';
import { Container } from '@/shared';

const Navbar = () => {
	return (
    <div className='bg-base-200 py-4'>
      <Container>
        <div className="flex">
          <Logo />
        </div>
      </Container>
		</div>
	);
};

export default Navbar;
