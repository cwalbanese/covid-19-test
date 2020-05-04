import React from 'react';

const toggleMenu = () => {
  const cross = document.querySelector('.cross');
  const menu = document.querySelector('.menu');
  const page = document.querySelector('.page-container');
  cross.classList.toggle('toggle-menu');
  menu.classList.toggle('menu-offset');

  if (page.style.overflow === 'visible') {
    page.style.overflow = 'hidden';
  } else {
    page.style.overflow = 'visible';
  }
};

function Nav() {
  return (
    <div>
      {' '}
      <nav>
        <img
          onClick={toggleMenu}
          className="cross"
          src="/images/cross.svg"
          alt="red cross"
        ></img>

        <p onClick={toggleMenu} className="choose">
          &#9660; choose by available states
        </p>
      </nav>
    </div>
  );
}

export default Nav;
