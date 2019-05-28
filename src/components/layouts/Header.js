// static markup - no state - so we'll creat "functional" component
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Header = props => {
  // destructuring
  const { brand } = props;
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0'>
      <div className='container'>
        <a href='/' className='navbar-brand'>
          {brand}
        </a>
        <div>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to='/' className='nav-link'>
                <i className='fas fa-home' /> Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/add' className='nav-link'>
                <i className='fas fa-plus' /> Add
              </Link>
            </li>
            <li className='nav-item'>
              <Link to='/about' className='nav-link'>
                <i className='fas fa-question' /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

Header.defaultProps = {
  brand: 'Contact Manager Application'
};

Header.propTypes = {
  brand: PropTypes.string.isRequired
};

export default Header;
