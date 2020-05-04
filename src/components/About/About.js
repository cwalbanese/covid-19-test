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
            <a href="/alabama/#results">Alabama</a>
          </li>
          <li>
            <a href="/alaska/#results">Alaska</a>
          </li>{' '}
          <li>
            <a href="/arizona/#results">Arizona</a>
          </li>{' '}
          <li>
            <a href="/arkansas/#results">Arkansas</a>
          </li>{' '}
          <li>
            <a href="/california/#results">California</a>
          </li>{' '}
          <li>
            <a href="/colorado/#results">Colorado</a>
          </li>{' '}
          <li>
            <a href="/connecticut/#results">Connecticut</a>
          </li>{' '}
          <li>
            <a href="/delaware/#results">Delaware</a>
          </li>{' '}
          <li>
            <a href="/florida/#results">Florida</a>
          </li>{' '}
          <li>
            <a href="/georgia/#results">Georgia</a>
          </li>{' '}
          <li>
            <a href="/hawaii/#results">Hawaii</a>
          </li>{' '}
          <li>
            <a href="/idaho/#results">Idaho</a>
          </li>{' '}
          <li>
            <a href="/illinois/#results">Illinois</a>
          </li>{' '}
          <li>
            <a href="/indiana/#results">Indiana</a>
          </li>{' '}
          <li>
            <a href="/Kansas/#results">Kansas</a>
          </li>{' '}
          <li>
            <a href="/kentucky/#results">Kentucky</a>
          </li>{' '}
          <li>
            <a href="/louisiana/#results">Louisiana</a>
          </li>{' '}
          <li>
            <a href="/maine/#results">Maine</a>
          </li>{' '}
          <li>
            <a href="/massachusetts/#results">Massachusetts</a>
          </li>{' '}
          <li>
            <a href="/michigan/#results">Michigan</a>
          </li>{' '}
          <li>
            <a href="/minnesota/#results">Minnesota</a>
          </li>
          <li>
            <a href="/mississippi/#results">Mississippi</a>
          </li>{' '}
          <li>
            <a href="/missouri/#results">Missouri</a>
          </li>{' '}
          <li>
            <a href="/montana/#results">Montana</a>
          </li>{' '}
          <li>
            <a href="/new-jersey/#results">New Jersey</a>
          </li>{' '}
          <li>
            <a href="/new-mexico/#results">New Mexico</a>
          </li>{' '}
          <li>
            <a href="/new-york/#results">New York</a>
          </li>{' '}
          <li>
            <a href="/north-carolina/#results">North Carolina</a>
          </li>{' '}
          <li>
            <a href="/oklahoma/#results">Oklahoma</a>
          </li>{' '}
          <li>
            <a href="/pennsylvania/#results">Pennsylvania</a>
          </li>{' '}
          <li>
            <a href="/texas/#results">Texas</a>
          </li>
          <li>
            <a href="/utah/#results">Utah</a>
          </li>
          <li>
            <a href="/washington/#results">Washington</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
