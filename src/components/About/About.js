import React from 'react';

const toggleMenu = () => {
  const cross = document.querySelector('.cross');
  const menu = document.querySelector('.menu');
  cross.classList.toggle('toggle-menu');
  menu.classList.toggle('menu-offset');
};

function About() {
  return (
    <div className="about">
      <img
        className="doctor"
        src="/images/doctor.jpg"
        alt="doctor with stethoscope"
      ></img>

      <p className="testing-title">COVID-19 TESTING LOCATIONS</p>
      <p className="testing-about">
        Welcome. Here you can find various locations across the United States
        that are providing testing at this time. All data provided is from a
        third-party source that is contributed to by the community.
      </p>
      <div className="menu menu-offset">
        <ul onClick={toggleMenu}>
          <li>
            <a href="/alabama">Alabama</a>
          </li>
          <li>
            <a href="/alaska">Alaska</a>
          </li>{' '}
          <li>
            <a href="/arizona">Arizona</a>
          </li>{' '}
          <li>
            <a href="/arkansas">Arkansas</a>
          </li>{' '}
          <li>
            <a href="/california">California</a>
          </li>{' '}
          <li>
            <a href="/colorado">Colorado</a>
          </li>{' '}
          <li>
            <a href="/connecticut">Connecticut</a>
          </li>{' '}
          <li>
            <a href="/delaware">Delaware</a>
          </li>{' '}
          <li>
            <a href="/florida">Florida</a>
          </li>{' '}
          <li>
            <a href="/georgia">Georgia</a>
          </li>{' '}
          <li>
            <a href="/hawaii">Hawaii</a>
          </li>{' '}
          <li>
            <a href="/idaho">Idaho</a>
          </li>{' '}
          <li>
            <a href="/illinois">Illinois</a>
          </li>{' '}
          <li>
            <a href="/indiana">Indiana</a>
          </li>{' '}
          <li>
            <a href="/Kansas">Kansas</a>
          </li>{' '}
          <li>
            <a href="/kentucky">Kentucky</a>
          </li>{' '}
          <li>
            <a href="/louisiana">Louisiana</a>
          </li>{' '}
          <li>
            <a href="/maine">Maine</a>
          </li>{' '}
          <li>
            <a href="/massachusetts">Massachusetts</a>
          </li>{' '}
          <li>
            <a href="/michigan">Michigan</a>
          </li>{' '}
          <li>
            <a href="/minnesota">Minnesota</a>
          </li>
          <li>
            <a href="/mississippi">Mississippi</a>
          </li>{' '}
          <li>
            <a href="/missouri">Missouri</a>
          </li>{' '}
          <li>
            <a href="/montana">Montana</a>
          </li>{' '}
          <li>
            <a href="/new-jersey">New Jersey</a>
          </li>{' '}
          <li>
            <a href="/new-mexico">New Mexico</a>
          </li>{' '}
          <li>
            <a href="/new-york">New York</a>
          </li>{' '}
          <li>
            <a href="/north-carolina">North Carolina</a>
          </li>{' '}
          <li>
            <a href="/oklahoma">Oklahoma</a>
          </li>{' '}
          <li>
            <a href="/pennsylvania">Pennsylvania</a>
          </li>{' '}
          <li>
            <a href="/texas">Texas</a>
          </li>
          <li>
            <a href="/utah">Utah</a>
          </li>
          <li>
            <a href="/washington">Washington</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
